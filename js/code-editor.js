
function copyCode() {
    // Find the CodeMirror instance
    let codeMirrorEditor = document.querySelector('.editor.active .CodeMirror')?.CodeMirror;

    if (!codeMirrorEditor) {
        console.error("No active CodeMirror editor found!");
        alert("No active code editor found!");
        return;
    }

    // Get the content from CodeMirror
    let codeText = codeMirrorEditor.getValue().trim();

    if (codeText === "") {
        console.error("Nothing to copy! The editor is empty.");
        alert("Nothing to copy! The editor is empty.");
        return;
    }

    // Modern method: Clipboard API
    if (navigator.clipboard) {
        navigator.clipboard.writeText(codeText)
            .then(() => {
                alert("Code copied successfully!");
            })
            .catch(err => {
                console.error("Clipboard API failed. Using fallback.", err);
                fallbackCopy(codeText); // Use fallback if clipboard API fails
            });
    } else {
        // Use fallback for older browsers
        fallbackCopy(codeText);
    }
}