import { call } from './general';

export function getFrequencies() {
  const template = {
    type: 'column2d',
    renderAt: 'chart-container',
    width: '550',
    height: '350',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Monthly revenue for last year",
        "subCaption": "Harry's SuperMart",
        "xAxisName": "Month",
        "yAxisName": "Revenues (In USD)",
        "numberPrefix": "$",
        "paletteColors": "#0075c2",
        "bgColor": "#ffffff",
        "borderAlpha": "20",
        "canvasBorderAlpha": "0",
        "usePlotGradientColor": "0",
        "plotBorderAlpha": "10",
        "placevaluesInside": "1",
        "rotatevalues": "1",
        "valueFontColor": "#ffffff",
        "showXAxisLine": "1",
        "xAxisLineColor": "#999999",
        "divlineColor": "#999999",
        "divLineIsDashed": "1",
        "showAlternateHGridColor": "0",
        "subcaptionFontBold": "0",
        "subcaptionFontSize": "14"
      },
      "data": [],
    }
  };

  return call('frequency', template);
}
