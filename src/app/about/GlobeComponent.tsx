"use client";
import React, { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldHigh from "@amcharts/amcharts4-geodata/worldHigh";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// Apply amcharts animated theme
am4core.useTheme(am4themes_animated);

export default function GlobeComponent() {
  const chartRef = useRef<am4maps.MapChart | null>(null);

  useLayoutEffect(() => {
    const chart = am4core.create("chartdiv", am4maps.MapChart);
    chartRef.current = chart;

    chart.geodata = am4geodata_worldHigh;
    chart.projection = new am4maps.projections.Orthographic();
    chart.panBehavior = "rotateLongLat";
    chart.deltaLatitude = -20;
    chart.padding(20, 20, 20, 20);
    chart.maxZoomLevel = 1;

    chart.adapter.add("deltaLatitude", function (deltaLatitude) {
      return am4core.math.fitToRange(deltaLatitude as number, -90, 90);
    });

    const groupData = [
      {
        name: "fmi branches",
        data: [
          { title: "India", id: "IN" },
          { title: "UAE", id: "AE" },
          { title: "Saudi Arabia", id: "SA" },
          { title: "Bahrain", id: "BH" },
          { title: "Qatar", id: "QA" },
          { title: "Oman", id: "OM" },
          { title: "South Africa", id: "ZA" },
          { title: "Egypt", id: "EG" },
          { title: "Ireland", id: "IE" },
          { title: "Spain", id: "ES" },
          { title: "Germany", id: "DE" },
          { title: "Australia", id: "AU" },
          { title: "Mexico", id: "MX" },
          { title: "Argentina", id: "AR" },
          { title: "Colombia", id: "CO" },
          { title: "Russia", id: "RU" },
          { title: "USA", id: "US" },
          { title: "Brazil", id: "BR" },
          { title: "Iran", id: "IR" },
          { title: "Israel", id: "IL" },
          { title: "Greece", id: "GR" },
          { title: "Nepal", id: "NP" },
          { title: "Bhutan", id: "BT" },
          { title: "Sri Lanka", id: "LK" },
          { title: "Kuwait", id: "KW" },
          { title: "Panama", id: "PA" },
          { title: "Hungary", id: "HU" },
          { title: "Czech Republic", id: "CZ" },
          { title: "United Kingdom", id: "GB" },
        ],
      },
    ];

    const excludedCountries = ["AQ"];

    groupData.forEach(function (group) {
      const series = chart.series.push(new am4maps.MapPolygonSeries());
      series.name = group.name;
      series.useGeodata = true;
      const includedCountries: string[] = [];
      group.data.forEach(function (country) {
        includedCountries.push(country.id);
        excludedCountries.push(country.id);
      });
      series.include = includedCountries;
      series.fill = am4core.color("#dddd00");
      series.setStateOnChildren = true;
      series.calculateVisualCenter = true;

      const mapPolygonTemplate = series.mapPolygons.template;
      mapPolygonTemplate.fill = am4core.color("#ea3238");
      mapPolygonTemplate.stroke = am4core.color("#ea3238");
      mapPolygonTemplate.fillOpacity = 1;
      mapPolygonTemplate.nonScalingStroke = true;
      mapPolygonTemplate.tooltipPosition = "fixed";

      const hoverState = mapPolygonTemplate.states.create("hover");
      hoverState.properties.fill = am4core.color("#e11b22");
      hoverState.properties.stroke = am4core.color("#e11b22");

      mapPolygonTemplate.tooltipText = "{title}";
      series.data = JSON.parse(JSON.stringify(group.data));
    });

    const worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
    worldSeries.name = "world";
    worldSeries.useGeodata = true;
    worldSeries.exclude = excludedCountries;
    worldSeries.fillOpacity = 0.5;
    worldSeries.mapPolygons.template.polygon.fill = am4core.color("#808080");
    worldSeries.mapPolygons.template.polygon.stroke = am4core.color("#c5817f");
    worldSeries.mapPolygons.template.polygon.strokeOpacity = 0.15;
    worldSeries.hiddenInLegend = true;
    worldSeries.mapPolygons.template.nonScalingStroke = true;

    const graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
    graticuleSeries.mapLines.template.line.stroke = am4core.color("#c5817f");
    graticuleSeries.mapLines.template.line.strokeOpacity = 0.1;
    graticuleSeries.fitExtent = false;

    chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.9;
    chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#fff");

    let animation: am4core.Animation;
    const timeout = setTimeout(function () {
      animation = chart.animate({ property: "deltaLongitude", to: 100000 }, 20000000);
    }, 3000);

    chart.seriesContainer.events.on("down", function () {
      if (animation) {
        animation.stop();
      }
    });

    return () => {
      clearTimeout(timeout);
      if (chartRef.current) {
        chartRef.current.dispose();
      }
    };
  }, []);

  return <div id="chartdiv"></div>;
}
