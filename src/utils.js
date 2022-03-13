// 标尺中每小格代表的宽度(根据scale的不同实时变化)
const getTickUnit = (scale) => {
  if (scale <= 0.25) return 40
  if (scale <= 0.5) return 20
  if (scale <= 1) return 10
  if (scale <= 2) return 5
  if (scale <= 4) return 2
  return 1
}

export function drawRuler(ctx, scale, width, height, start) {
  console.log(`start: ${start}`);
  ctx.clearRect(0, 0, width, height);

  const tickUnit = getTickUnit(scale);
  const longTickUnit = tickUnit * 10;

  ctx.beginPath();
  ctx.strokeStyle = '#000000';
  console.log(`start=${start}`);
  // let end = start;
  // while (end < start + width / scale) {
  //   const pos = Math.ceil(start + (end - start) * scale);
  //   const x = pos + 0.5;
  //   ctx.moveTo(x, 0)
  //   if (pos % longTickUnit === 0) {
  //     ctx.fillText(end, x + 2, 20);
  //     ctx.lineTo(x, 20);
  //   } else {
  //     ctx.lineTo(x, 10);
  //   }
  //   end = end + tickUnit;
  // }

  start = Math.ceil(start);
  console.log('start:', start);
  let x;
  for (let end = start; end < start + Math.ceil(width / scale); end++) {
    // console.log(end);
    if (end % longTickUnit === 0) {
      x = Math.ceil((end - start) * scale);
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 20);
      console.log(`x=${x}, end=${end}`);
      ctx.fillText(end, x + 2, 20);
    } else if (end % tickUnit === 0) {
      x = Math.ceil((end - start) * scale);
      ctx.moveTo(x, 0)
      ctx.lineTo(x, 10);
      console.log(`x=${x}, end=${end}`);
    }
  }

  ctx.stroke();
}