
const input = document.getElementById('uploadPDF');
const container = document.getElementById('flipbook');

input.addEventListener('change', function () {
    const file = this.files[0];
    if (file.type !== "application/pdf") {
        alert("Please upload a PDF file");
        return;
    }

    const reader = new FileReader();
    reader.onload = function () {
        const typedarray = new Uint8Array(this.result);

        pdfjsLib.getDocument(typedarray).promise.then(pdf => {
            container.innerHTML = "";
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                pdf.getPage(pageNum).then(page => {
                    const viewport = page.getViewport({ scale: 1.3 });
                    const canvas = document.createElement("canvas");
                    const context = canvas.getContext("2d");

                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    page.render({
                        canvasContext: context,
                        viewport: viewport
                    });

                    container.appendChild(canvas);
                });
            }
        });
    };
    reader.readAsArrayBuffer(file);
});
