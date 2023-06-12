# Harbor​

Harbor to aplikacja do przechowywania obrazów, zapewniająca bezpieczeństwo i kontrolę dostępu, zgodną, wydajną i interoperacyjną, umożliwiającą efektywne zarządzanie w chmurowych platformach obliczeniowych, takich jak Kubernetes i Docker, i będąca centralnym punktem dla przechowywania, zarządzania i udostępniania obrazów, zapewniając kontrolę dostępu, autoryzację i zwiększoną świadomość bezpieczeństwa w cyklu życia aplikacji.​

# Bezpieczeństwo systemu ​

Skanowanie w poszukiwaniu luk bezpieczeństwa (Trivy)​

Notary zapewnia bezpieczeństwo i integralność obrazów. Dzięki podpisywaniu obrazów i weryfikacji ich podpisów, Notary chroni przed nieautoryzowanymi zmianami i zapewnia, że obrazy są bezpieczne do użycia, bez względu na miejsce ich przechowywania.​

Harbor dostarcza możliwość zbierania, przechowywania i przeglądania logów dotyczących między innymi:​

Administracyjne: tworzenie, usuwanie i modyfikacja użytkowników, projektów, repozytoriów.​

Obrazy: pobieranie, przesyłanie, skanowanie, usuwanie obrazów.​

Uwierzytelnianie i autoryzacja: logowanie, wylogowanie, autoryzacja dostępu, operacje na obrazach.​

Skanowanie podatności: wyniki skanowania, raporty dotyczące podatności.​

Rejestracja zdarzeń: tworzenie, usuwanie, modyfikacja audytu, dostęp do logów.​

Zdarzenia systemowe i diagnostyczne: start, zatrzymanie, błędy aplikacji Harbor.​
​
# Notary

Skrót (digest) to unikalny identyfikator obrazu, który jest tworzony przez funkcję skrótu kryptograficznego. Pozwala to na jednoznaczne zidentyfikowanie obrazu, nawet jeśli jego tagi zostaną zmienione. Uwierzytelnianie odnosi się do procesu weryfikacji tożsamości użytkownika lub systemu, który próbuje pobrać skrót obrazu . ​

# Tworzenie projektów​

Obrazy nie mogą być przesyłane do Harbor przed utworzeniem projektu.​

Projekty może tworzyć każdy zarejestrowany użytkownik.​

W projekcie zastosowano kontrolę dostępu opartą na rolach, zapewniającą odpowiednie uprawnienia użytkownikom do wykonywania określonych operacji.​

Istnieją dwa rodzaje projektów w Harbor:​

Publiczne: Każdy użytkownik może pobierać obrazy z tego projektu.​

Prywatne: Tylko użytkownicy, którzy są członkami projektu, mogą pobierać obrazy.​
​
# Proxy Cache ​

Mechanizm, który przechowuje kopie często używanych zasobów w pamięci podręcznej, aby przyspieszyć ich dostępność i zmniejszyć obciążenie sieci. W przypadku projektu Harbor, Proxy Cache może być używany do przechowywania obrazów kontenerów, które są powszechnie pobierane przez wiele użytkowników.​

# Proxy Cache – polecenia CLI​

```bash
do wpisania polecenia
```

# Zarządzanie etykietami

Global Level Label: Zarządzany przez administratorów systemu Harbor i używany do zarządzania obrazami całego systemu. Mogą być dodawane do obrazów w ramach dowolnych projektów.​

Project Level Label: Zarządzany przez administratorów projektu w ramach konkretnego projektu i może być dodawany tylko do obrazów należących do tego projektu.​