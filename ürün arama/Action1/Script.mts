
Browser("GittiGidiyor – Türkiye'nin").Page("GittiGidiyor – Türkiye'nin").WebEdit("Ne aramıştınız?").Set "anakart"
Browser("GittiGidiyor – Türkiye'nin").Page("GittiGidiyor – Türkiye'nin").WebElement("header-search-find-link").Click
Browser("GittiGidiyor – Türkiye'nin").Page("Anakart - GittiGidiyor").WebCheckBox("WebCheckBox").Set "ON"
Browser("GittiGidiyor – Türkiye'nin").Page("Anakart - GittiGidiyor").Image("HDMI SATA3 USB3").Click
Browser("GittiGidiyor – Türkiye'nin").Page("ASUS Amd ROG STRIX B450-E").WebButton("Sepete Ekle").Click
Browser("GittiGidiyor – Türkiye'nin").Page("ASUS Amd ROG STRIX B450-E").Link("Sepete Git").Click
Browser("GittiGidiyor – Türkiye'nin").Page("Sepetim - GittiGidiyor").WebElement("Sil").Click
Browser("GittiGidiyor – Türkiye'nin").Page("Sepetim - GittiGidiyor").Link("Anasayfa").Click

