/**
 * 两点抛物线
 * @param {*} pt1 
 * @param {*} pt2 
 * @param {*} options 
 */
export function parabolaEquation(pt1, pt2, options) {

  //方程 y=-(4h/L^2)*x^2+h h:顶点高度 L：横纵间距较大者

  var h = options && options.height && options.height > 5000 ? options.height : 5000;

  var L = Math.abs(pt1.lon - pt2.lon) > Math.abs(pt1.lat - pt2.lat) ? Math.abs(pt1.lon - pt2.lon) : Math.abs(pt1.lat - pt2.lat);

  var num = options.num && options.num > 50 ? options.num : 50;

  var result = [];

  var dlt = L / num;

  if (Math.abs(pt1.lon - pt2.lon) > Math.abs(pt1.lat - pt2.lat)) { //以lon为基准

    var delLat = (pt2.lat - pt1.lat) / num;

    if (pt1.lon - pt2.lon > 0) {

      dlt = -dlt;

    }

    for (var i = 0; i < num; i++) {

      var tempH = h - Math.pow((-0.5 * L + Math.abs(dlt) * i), 2) * 4 * h / Math.pow(L, 2);

      var lon = pt1.lon + dlt * i;

      var lat = pt1.lat + delLat * i;

      result.push(lon);
      result.push(lat);
      result.push(tempH);

    }

  } else { //以lat为基准

    var delLon = (pt2.lon - pt1.lon) / num;

    if (pt1.lat - pt2.lat > 0) {

      dlt = -dlt;

    }

    for (var i = 0; i < num; i++) {

      var tempH = h - Math.pow((-0.5 * L + Math.abs(dlt) * i), 2) * 4 * h / Math.pow(L, 2);

      var lon = pt1.lon + delLon * i;

      var lat = pt1.lat + dlt * i;

      result.push(lon);
      result.push(lat);
      result.push(tempH);

    }

  }

  if (options && options.resultOut != undefined) {

    options.resultOut = result;

  }

  return result;

}
