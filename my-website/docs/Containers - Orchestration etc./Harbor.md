test

# 1. Użytkownicy

TODO:
- [ ] do sprawdzenia czy jest opcja odczytu logów z nowo założonych kont

![[Pasted image 20230510104619.png]]

Harbor zarządza obrazami poprzez projekty. Administrator dostarcza dostęp do obrazów dla użytkowników poprzez dodanie usera do projektu i przypisanie mu odpowiedniej roli:

1. Limited Guest - nie ma pełnych uprawnień do odczytu projektu.
- Może pobierać obrazy (pull)
- Nie może pushować obrazów
- Brak dostępu do logów lub sprawdzenia listy użytkowników w projekcie

2. Guest - ma tylko odczyt dla projektu.
- Może pobierać obrazy (pull)
- Może retagować obrazy
- Nie może pushować obrazów

3. Developer - ma odczyt i zapis dla projektu.

4. Maintainer - posiada uprawnienia developera oraz:
- Może skanować obrazy
- Wyświetlać replications jobs
- Usuwać obrazy (oraz helm charts)

5. ProjectAdmin - rola przyznawana osobie zakładającej nowy projekt.
- Posiada uprawnienia zapis - odczyt
- Może dodawać / usuwać użytkowników
- Ma dostęp do *vulnerability scan* (Trivy)

****

 Opróćz powyższych ról istnieją dwie role na poziomie systemu harbor:

1. Harbor system administrator - ma możliwość:
-  listować wszystkie projekty
- nadawać uprawnienia / role użytkownikom
-  ustalać politykę skanowania podatności dla wszystkich obrazów

2. Anonymous - gdy użytkownik nie zaloguje się ma możliwość odczytu publicznych projektów.

![[Pasted image 20230510150159.png]]

Pełna lista uprawnień dla danych ról:
https://goharbor.io/docs/2.8.0/administration/managing-users/user-permissions-by-role/

# 2. Konfiguracja ustawień globalnych

Użyj menu rozwijanego "Tworzenie projektu", aby ustawić, którzy użytkownicy mogą tworzyć projekty. Wybierz "Wszyscy", aby umożliwić wszystkim użytkownikom tworzenie projektów. Wybierz "Admin only", aby umożliwić tworzenie projektów tylko użytkownikom posiadającym rolę administratora systemu Harbor.
![[Pasted image 20230510151311.png]]

# 3. Skanowanie w poszukiwaniu luk bezpieczeństwa

Harbor, oferuje statyczną analizę podatności obrazów. Do przeprowadzenia tej analizy wykorzystuje on Trivy, pozwalające na skanowanie obrazów pod kątem potencjalnych luk w zabezpieczeniach.

![[Pasted image 20230511141119.png]]
![[Pasted image 20230511141326.png]]

# 4. Tworzenie projektów

Projekt w Harbor zawiera wszystkie repozytoria aplikacji. Obrazy nie mogą być przesyłane do Harbor przed utworzeniem projektu. W projektach zastosowano kontrolę dostępu opartą na rolach (Role-Based Access Control - RBAC), dzięki czemu tylko użytkownicy posiadający odpowiednie role mogą wykonywać określone operacje.

Istnieją dwa rodzaje projektów w Harbor:

- Publiczne: Każdy użytkownik może pobierać obrazy z tego projektu. Jest to wygodny sposób udostępniania repozytoriów innym osobom.
- Prywatne: Tylko użytkownicy, którzy są członkami projektu, mogą pobierać obrazy.

Tworzysz różne projekty, do których przypisujesz użytkowników, aby mogli przesyłać i pobierać repozytoria obrazów. Konfigurujesz również ustawienia specyficzne dla projektu. Po pierwszej instalacji Harbor tworzony jest domyślny publiczny projekt o nazwie "library".

Wymagania wstępne Zaloguj się do Harbor za pomocą konta administratora Harbor lub konta administratora projektu.

Procedura:
1. Przejdź do sekcji "Projekty" i kliknij "Nowy projekt".
2. Podaj nazwę dla projektu.
3. (Opcjonalnie) Zaznacz pole wyboru "Publiczny", aby uczynić projekt publicznym.
	Jeśli ustawisz projekt na publiczny, każdy użytkownik będzie mógł pobierać obrazy z tego projektu. Jeśli pozostawisz projekt jako prywatny, tylko użytkownicy będący członkami projektu będą mogli pobierać obrazy. Możesz w dowolnym momencie przełączać projekty z publicznych na prywatne i odwrotnie po utworzeniu projektu.
4. Kliknij "OK".

![[Pasted image 20230511145724.png]]

Po utworzeniu projektu możesz przeglądać podsumowanie, repozytoria, wykresy Helm, członków, etykiety, skaner, p2p preheat, zasady, konta robotów, logi i konfigurację za pomocą zakładek nawigacyjnych.

Dostępne są dwa widoki do wyświetlania repozytoriów: widok listy i widok kart. Możesz przełączać się między nimi, klikając odpowiednią ikonę.

Właściwości projektu można zmieniać, klikając "Konfiguracja".

Aby umożliwić dostęp do wszystkich repozytoriów w projekcie dla każdego, zaznacz pole wyboru "Publiczny".

Aby zapobiec pobieraniu niepodpisanych obrazów w ramach projektu, zaznacz pole wyboru "Uniemożliwienie uruchamiania podatnych obrazów". Więcej informacji na temat zauf

---

limit projektu na usera: 
- [ ] check
