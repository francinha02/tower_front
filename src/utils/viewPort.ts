export default class ViewPort {
  public static vh(v: number): number {
    const h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    )
    return (v * h) / 100
  }

  public static vw(v: number): number {
    const w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    )
    return (v * w) / 100
  }

  public static vMin(v: number): number {
    return Math.min(ViewPort.vh(v), ViewPort.vw(v))
  }

  public static vMax(v: number): number {
    return Math.max(ViewPort.vh(v), ViewPort.vw(v))
  }
}
