class MarkDataExtractor {
    static extractMarkData($markRows) {
        let data = [];

        for (const [rowIndex, $row] of $markRows.entries()) {
            data.push([]);

            const $markList = $row.querySelectorAll(".estimate");
            for (const [markIndex, $mark] of $markList.entries()) {
                if (!$mark) continue;

                let mark = MarkDataExtractor.extractMark($mark);
                if (!mark) {
                    // console.log(
                    //     "mark null at",
                    //     rowIndex,
                    //     markIndex,
                    //     $mark.textContent
                    // );
                    continue;
                }

                const multiplier = MarkDataExtractor.extractMultiplier($mark);
                if (!multiplier) {
                    // console.log("multiplier null at", rowIndex, markIndex);
                    continue;
                }

                mark *= multiplier;
                data[rowIndex].push({ mark, multiplier });
            }
        }

        return data;
    }

    static extractMark($mark) {
        if (!$mark) return null;

        const mark = $mark.textContent.trim();

        if (!mark || isNaN(mark)) return null;

        return parseInt(mark);
    }

    static extractMultiplier($mark) {
        if (!$mark) return null;

        $mark.click();

        const markType = document
            .querySelector(".estimate__info")
            .textContent.trim()
            .replace(config.multiplierRegex, "");
        const multiplier = config.multipliers[markType] || 1;

        document.querySelector(".overlay-backdrop").click();

        return multiplier;
    }
}
