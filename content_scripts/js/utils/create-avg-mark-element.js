const createAvgMarkElement = (avgMark) => {
    const $avgMark = document.createElement("span");

    $avgMark.textContent = avgMark.toString();

    $avgMark.classList.add("extension-avg-mark");
    if (avgMark >= 4 + config.markThreshold) {
        $avgMark.classList.add("extension-avg-mark--high");
    } else if (avgMark >= 3 + config.markThreshold) {
        $avgMark.classList.add("extension-avg-mark--normal");
    } else if (avgMark >= 2 + config.markThreshold) {
        $avgMark.classList.add("extension-avg-mark--low");
    } else if (avgMark >= 1 + config.markThreshold) {
        $avgMark.classList.add("extension-avg-mark--very-low");
    }

    return $avgMark;
};
