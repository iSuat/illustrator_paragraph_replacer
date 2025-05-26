// Adobe Illustrator - Daha güvenli format koruma yöntemi
// TextRange kullanarak formatı koruyarak değiştirme

function safeReplaceLineBreaks() {
    try {
        if (app.documents.length === 0) {
            alert("Lütfen önce bir döküman açın.");
            return;
        }
        
        if (app.selection.length === 0) {
            alert("Lütfen önce bir yazı bloğu seçin.");
            return;
        }
        
        var replacedCount = 0;
        
        for (var i = 0; i < app.selection.length; i++) {
            var selectedItem = app.selection[i];
            
            if (selectedItem.typename === "TextFrame") {
                var textFrame = selectedItem;
                var story = textFrame.textRange;
                var contents = story.contents;
                
                // Satır sonu pozisyonlarını bul
                var lineBreakPositions = [];
                for (var pos = 0; pos < contents.length; pos++) {
                    var charCode = contents.charCodeAt(pos);
                    if (charCode === 13 || charCode === 10) {
                        lineBreakPositions.push(pos);
                    }
                }
                
                // Geriye doğru değiştir (indeks kayması olmasın)
                for (var j = lineBreakPositions.length - 1; j >= 0; j--) {
                    var pos = lineBreakPositions[j];
                    
                    try {
                        // Belirli pozisyondaki karakteri seç ve değiştir
                        var charRange = story.characters[pos];
                        if (charRange && charRange.contents) {
                            charRange.contents = " ";
                            replacedCount++;
                        }
                    } catch (rangeError) {
                        // Bu karakter erişilemezse devam et
                        continue;
                    }
                }
            }
        }
        
        if (replacedCount > 0) {
            alert(replacedCount + " adet satır sonu karakteri değiştirildi.");
        } else {
            alert("Satır sonu karakteri bulunamadı.");
        }
        
    } catch (error) {
        alert("Hata: " + error.message);
    }
}

// Scripti çalıştır
safeReplaceLineBreaks();