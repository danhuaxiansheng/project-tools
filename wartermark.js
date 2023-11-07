// 页面添加水印效果
function setWatermark(strArr) {
  const id = '1.23452384164.123412416';
  if (document.getElementById(id) !== null) document.body.removeChild(document.getElementById(id));
  const can = document.createElement('canvas');
  can.width = 200;
  can.height = 150;
  const cans = can.getContext('2d');
  cans.rotate((-20 * Math.PI) / 180);
  cans.font = '13px 宋体';
  cans.fillStyle = 'rgba(211, 211, 211, 0.7)';
  cans.textAlign = 'center';
  cans.textBaseline = 'middle';
  const firstLine = strArr.slice(0, 2).join('-');
  const secondLine = strArr[2];
  const maxWidth = can.width - 20; // 设置最大宽度以避免截断
  let firstLineWidth = cans.measureText(firstLine).width;
  if (firstLineWidth > maxWidth) {
    // 如果第一行文字宽度超出最大宽度，进行缩放
    const scale = maxWidth / firstLineWidth;
    cans.setTransform(scale, 0, 0, scale, can.width / 2, can.height / 2 - 10);
    cans.fillText(firstLine, 0, 0);
  } else {
    cans.fillText(firstLine, can.width / 2, can.height / 2 - 10);
  }
  cans.fillText(secondLine, can.width / 2, can.height / 2 + 10);
  const div = document.createElement('div');
  div.id = id;
  div.style.pointerEvents = 'none';
  div.style.top = '0px';
  div.style.left = '0px';
  div.style.position = 'fixed';
  div.style.zIndex = '10000000';
  div.style.width = `${document.documentElement.clientWidth}px`;
  div.style.height = `${document.documentElement.clientHeight}px`;
  div.style.background = `url(${can.toDataURL('image/png')}) left top repeat`;
  document.body.appendChild(div);
  return id;
};

/**
 * 页面添加水印效果
 * @method set 设置水印
 * @method del 删除水印
 */
var waterMarkExtend = {
  // 设置水印
  set: (str) => {
    let id = '1.23452384164.123412416';
    if (document.getElementById(id) === null) {
      id = setWatermark(str);
    }
  },
  // 删除水印
  del: () => {
    let id = '1.23452384164.123412416';
    if (document.getElementById(id) !== null) document.body.removeChild(document.getElementById(id));
  },
};
