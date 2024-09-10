declare module 'stats.js' {
    class Stats {
      constructor();
      showPanel(panel: number): void;
      begin(): void;
      end(): void;
      dom: HTMLDivElement;
    }
    export = Stats;
  }