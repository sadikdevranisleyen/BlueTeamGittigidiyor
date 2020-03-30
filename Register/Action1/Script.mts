Browser("GittiGidiyor – Türkiye'nin").Page("GittiGidiyor – Türkiye'nin").Link("Ücretsiz Üye Ol").Click
Browser("GittiGidiyor – Türkiye'nin").Page("Ücretsiz Kayıt Olun -").WebEdit("name").Set "sadık devran"
Browser("GittiGidiyor – Türkiye'nin").Page("Ücretsiz Kayıt Olun -").WebEdit("surname").Set "işleyen"
Browser("GittiGidiyor – Türkiye'nin").Page("Ücretsiz Kayıt Olun -").WebEdit("email").Set "sadikdevran.isleyen@testinium.com"
Browser("GittiGidiyor – Türkiye'nin").Page("Ücretsiz Kayıt Olun -").WebElement("Şifreniz* Göster En az").Click
Browser("GittiGidiyor – Türkiye'nin").Page("Ücretsiz Kayıt Olun -").WebEdit("passwd").Set "berenn258"
Browser("GittiGidiyor – Türkiye'nin").Page("Ücretsiz Kayıt Olun -").WebEdit("gsmData").Set "(545) 824 24 64"
Browser("GittiGidiyor – Türkiye'nin").Page("Ücretsiz Kayıt Olun -").WebButton("Üye Ol").Click

