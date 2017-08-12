import {call} from './general';

export function getCategories() {
  const template = {
    type: 'doughnut2d',
    renderAt: 'chart-container2',
    width: '450',
    height: '450',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Topic Categories",
        "subCaption": "",
        "numberPrefix": "",
        "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
        "bgColor": "#ffffff",
        "showBorder": "0",
        "use3DLighting": "0",
        "showShadow": "0",
        "enableSmartLabels": "0",
        "startingAngle": "310",
        "showLabels": "0",
        "showPercentValues": "1",
        "showLegend": "1",
        "legendShadow": "0",
        "legendBorderAlpha": "0",
        "defaultCenterLabel": "",
        "centerLabel": "$label: $value",
        "centerLabelBold": "1",
        "showTooltip": "0",
        "decimals": "0",
        "captionFontSize": "14",
        "subcaptionFontSize": "14",
        "subcaptionFontBold": "0"
      },
      "data": []
    }
  };

  return call('category', template);
}
