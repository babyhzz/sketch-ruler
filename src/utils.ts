import { RulerConfig, RulerDirection } from "./types";

// 标尺中每小格代表的宽度(根据scale的不同实时变化)
const getTickUnit = (scale: number) => {
  if (scale <= 0.25) return 40;
  if (scale <= 0.5) return 20;
  if (scale <= 1) return 10;
  if (scale <= 2) return 5;
  if (scale <= 4) return 2;
  return 1;
};

export function drawRuler(
  ctx: CanvasRenderingContext2D,
  scale: number,
  width: number,
  height: number,
  start: number,
  direction: RulerDirection,
  config: RulerConfig
) {
  ctx.fillStyle = config.bgColor;
  ctx.fillRect(0, 0, width, height);

  ctx.beginPath();
  ctx.strokeStyle = config.tickColor;
  ctx.fillStyle = config.fontColor;
  ctx.font = "12px Arial";

  const tickUnit = getTickUnit(scale);
  const minTickValue = start;
  const maxTickValue = minTickValue + (direction === "vertical" ? height : width) / scale;
  const tickCount = Math.floor((maxTickValue - minTickValue) / tickUnit);
  const firstTickUnitValue = Math.ceil(minTickValue / tickUnit) * tickUnit;

  for (let i = 0; i < tickCount; i++) {
    const tickValue = firstTickUnitValue + i * tickUnit;
    const pos = Math.ceil((tickValue - minTickValue) * scale) + 0.5;

    if (direction === "horizontal") {
      const x = pos;
      if (tickValue % (10 * tickUnit) === 0) {
        ctx.moveTo(x, height);
        ctx.save();
        ctx.fillText(tickValue + "", x + 2, 0.4 * height);
        ctx.restore();
        ctx.lineTo(x, 0);
      } else {
        ctx.moveTo(x, height);
        ctx.lineTo(x, 0.6 * height);
      }
    } else {
      const y = pos;
      if (tickValue % (10 * tickUnit) === 0) {
        ctx.moveTo(width, y);
        ctx.save();
        ctx.translate(0, y);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText(tickValue + "", 6, 0.4 * width);
        ctx.restore();
        ctx.lineTo(0, y);
      } else {
        ctx.moveTo(width, y);
        ctx.lineTo(0.6 * width, y);
      }
    }
  }

  ctx.stroke();
}
