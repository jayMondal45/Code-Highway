// Initialize CodeMirror editors
        var htmlEditor = CodeMirror.fromTextArea(document.getElementById("html-code"), {
            mode: "htmlmixed",
            lineNumbers: true,
            theme: "dracula"
        });

        var cssEditor = CodeMirror.fromTextArea(document.getElementById("css-code"), {
            mode: "css",
            lineNumbers: true,
            theme: "dracula"
        });

        var jsEditor = CodeMirror.fromTextArea(document.getElementById("js-code"), {
            mode: "javascript",
            lineNumbers: true,
            theme: "dracula"
        });

        // Function to switch between tabs
        function switchTab(tab) {
            document.querySelectorAll('.editor').forEach(editor => editor.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

            document.getElementById(tab + '-editor').classList.add('active');
            document.querySelector(`[onclick="switchTab('${tab}')"]`).classList.add('active');
        }

        // Function to update the preview
        function updatePreview() {
            var previewFrame = document.getElementById('preview');
            var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
            preview.open();
            preview.write(`
                <html>
                <head>
                    <style>${cssEditor.getValue()}</style>
                </head>
                <body>
                    ${htmlEditor.getValue()}
                    <script>${jsEditor.getValue()}<\/script>
                </body>
                </html>
            `);
            preview.close();
        }

        // Initial preview update
        updatePreview();