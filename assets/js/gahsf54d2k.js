function lecufue9fb() {
    const start = performance.now();
    debugger;
    if (performance.now() - start > 100) {
      return true;
    }
    setTimeout(lecufue9fb, 1000);
  }
  lecufue9fb();
  