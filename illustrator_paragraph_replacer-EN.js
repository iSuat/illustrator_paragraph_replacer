// Adobe Illustrator - Line Break to Space Replacer Script
// Replaces line breaks (Enter key breaks) with spaces in selected text frames
// Preserves all character formatting (bold, italic, colors, etc.)

function replaceLineBreaksWithSpaces() {
    try {
        // Check if there's an active document
        if (app.documents.length === 0) {
            alert("Please open a document first.");
            return;
        }
        
        // Check if there's a selection
        if (app.selection.length === 0) {
            alert("Please select a text frame first.");
            return;
        }
        
        var replacedCount = 0;
        
        // Process all selected items
        for (var i = 0; i < app.selection.length; i++) {
            var selectedItem = app.selection[i];
            
            // Check if the selected item is a text frame
            if (selectedItem.typename === "TextFrame") {
                var textFrame = selectedItem;
                var story = textFrame.textRange;
                var contents = story.contents;
                
                // Find line break positions
                var lineBreakPositions = [];
                for (var pos = 0; pos < contents.length; pos++) {
                    var charCode = contents.charCodeAt(pos);
                    // Check for carriage return (13) or line feed (10)
                    if (charCode === 13 || charCode === 10) {
                        lineBreakPositions.push(pos);
                    }
                }
                
                // Replace line breaks from end to beginning (to avoid index shifting)
                for (var j = lineBreakPositions.length - 1; j >= 0; j--) {
                    var pos = lineBreakPositions[j];
                    
                    try {
                        // Select and replace the character at specific position
                        var charRange = story.characters[pos];
                        if (charRange && charRange.contents) {
                            charRange.contents = " ";
                            replacedCount++;
                        }
                    } catch (rangeError) {
                        // Continue if this character is not accessible
                        continue;
                    }
                }
            }
        }
        
        // Show result message
        if (replacedCount > 0) {
            alert(replacedCount + " line break(s) replaced with spaces.");
        } else {
            alert("No line breaks found in selected text frame(s).");
        }
        
    } catch (error) {
        alert("Error: " + error.message);
    }
}

// Execute the script
replaceLineBreaksWithSpaces();
