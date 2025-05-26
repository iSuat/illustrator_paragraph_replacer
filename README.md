# Adobe Illustrator Line Break Replacer

*[Türkçe açıklama aşağıdadır](#türkçe)*

A simple Adobe Illustrator script that replaces line breaks (Enter key breaks) with spaces in selected text frames while preserving all character formatting.

## Features

- ✅ Replaces line breaks with spaces in selected text frames
- ✅ Preserves all character formatting (bold, italic, colors, font families, etc.)
- ✅ Works with multiple selected text frames simultaneously
- ✅ Safe and reliable - processes characters individually to avoid formatting loss
- ✅ Shows confirmation message with the number of replacements made

## Problem Solved

When you use "Show Hidden Characters" in Adobe Illustrator, you can see paragraph marks (¶) where Enter was pressed, but Illustrator's built-in Find & Replace cannot find and replace these line break characters. This script solves that limitation.

## Usage

1. **Select** one or more text frames in Adobe Illustrator
2. **Go to** File > Scripts > Other Script...
3. **Choose** the `line-break-replacer.jsx` file
4. **The script will automatically:**
   - Find all line break characters in selected text frames
   - Replace them with single spaces
   - Show a confirmation message

## Installation

1. **Download** the `line-break-replacer.jsx` file
2. **Save it** to your preferred location
3. **Run it** via File > Scripts > Other Script... in Adobe Illustrator

### Optional: Create an Action for Quick Access

1. Open Window > Actions in Adobe Illustrator
2. Create a new action
3. Record the script execution
4. Assign a keyboard shortcut for even faster access

## Technical Details

- **Script Language:** Adobe ExtendScript (JavaScript for Adobe applications)
- **Compatibility:** Adobe Illustrator CS6 and later
- **Character Codes Detected:** 
  - ASCII 13 (Carriage Return)
  - ASCII 10 (Line Feed)
- **Processing Method:** Backward iteration to prevent index shifting
- **Format Preservation:** Uses individual character ranges to maintain formatting

## Requirements

- Adobe Illustrator CS6 or later
- Text frames with line break characters

## Contributing

Feel free to submit issues, fork the repository, and create pull requests for any improvements.

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Türkçe

Adobe Illustrator'da seçili yazı bloklarındaki satır sonu karakterlerini (Enter ile oluşan) boşluklarla değiştiren basit bir script. Tüm karakter formatlarını korur.

### Özellikler

- ✅ Seçili yazı bloklarındaki satır sonlarını boşluklarla değiştirir
- ✅ Tüm karakter formatlarını korur (kalın, italik, renkler, font aileleri vb.)
- ✅ Aynı anda birden fazla seçili yazı bloğu ile çalışır
- ✅ Güvenli ve güvenilir - format kaybını önlemek için karakterleri tek tek işler
- ✅ Yapılan değişiklik sayısını gösteren onay mesajı

### Çözülen Problem

Adobe Illustrator'da "Show Hidden Characters" kullandığınızda Enter'ın basıldığı yerlerde paragraf işaretlerini (¶) görebilirsiniz, ancak Illustrator'ın yerleşik Find & Replace özelliği bu satır sonu karakterlerini bulamaz ve değiştiremez. Bu script bu sınırlamayı çözer.

### Kullanım

1. **Adobe Illustrator'da** bir veya birden fazla yazı bloğunu seçin
2. **File > Scripts > Other Script...** menüsüne gidin
3. **`line-break-replacer.jsx`** dosyasını seçin
4. **Script otomatik olarak:**
   - Seçili yazı bloklarındaki tüm satır sonu karakterlerini bulur
   - Bunları tek boşluklarla değiştirir
   - Onay mesajı gösterir

### Kurulum

1. **`line-break-replacer.jsx`** dosyasını indirin
2. **İstediğiniz konuma** kaydedin
3. **Adobe Illustrator'da** File > Scripts > Other Script... ile çalıştırın

### İsteğe Bağlı: Hızlı Erişim için Action Oluşturma

1. Adobe Illustrator'da Window > Actions'ı açın
2. Yeni bir action oluşturun
3. Script çalıştırmasını kaydedin
4. Daha hızlı erişim için klavye kısayolu atayın

### Teknik Detaylar

- **Script Dili:** Adobe ExtendScript (Adobe uygulamaları için JavaScript)
- **Uyumluluk:** Adobe Illustrator CS6 ve sonrası
- **Tespit Edilen Karakter Kodları:**
  - ASCII 13 (Carriage Return)
  - ASCII 10 (Line Feed)
- **İşleme Yöntemi:** İndeks kaymasını önlemek için geriye doğru iterasyon
- **Format Korunması:** Formatı korumak için bireysel karakter aralıkları kullanır

### Gereksinimler

- Adobe Illustrator CS6 veya sonrası
- Satır sonu karakterleri içeren yazı blokları

### Katkıda Bulunma

Sorunları bildirmek, repository'yi fork etmek ve iyileştirmeler için pull request oluşturmak için çekinmeyin.

### Lisans

Bu proje açık kaynaklıdır ve [MIT Lisansı](LICENSE) altında kullanılabilir.
