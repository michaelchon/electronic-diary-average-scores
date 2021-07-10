class Program {
    constructor() {
        this.$subjectRows = document.querySelectorAll(".date-grid__table > tr");

        const $markTable = document.querySelectorAll(".date-grid__table")[1];
        this.$markRows = $markTable
            .querySelector("tbody")
            .querySelectorAll("tr");
    }

    main() {
        if (document.querySelector(".extension-avg-mark")) return;

        const markData = MarkDataExtractor.extractMarkData(this.$markRows);
        // console.log(markData);

        for (const [rowNumber, markRow] of markData.entries()) {
            const markManager = new MarkManager();
            for (const { mark, multiplier } of markRow) {
                markManager.addMark(mark, multiplier);
            }
            const avgMark = markManager.getAvg().toFixed(2);

            const $avgMark = createAvgMarkElement(avgMark);
            this.$subjectRows[rowNumber].querySelector("td").prepend($avgMark);
        }
    }
}
