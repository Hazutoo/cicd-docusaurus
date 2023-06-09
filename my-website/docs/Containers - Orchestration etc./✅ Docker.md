### Czym jest docker?
To narzędzie, które pozwala na uruchamianie aplikacji w izolowanych, lekkich kontenerach. Dzięki temu, można uruchamiać i testować aplikacje w izolowanych środowiskach, co zapewnia lepszą kontrolę nad zależnościami i konfiguracją, a także ułatwia wdrażanie i skalowanie aplikacji. Docker pozwala na łatwe budowanie, dystrybucję i uruchamianie aplikacji w różnych środowiskach, bez konieczności instalowania dodatkowych zależności i narzędzi.

### Jak to działa?
Docker działa na poziomie wirtualizacji na poziomie systemu operacyjnego, co oznacza, że wykorzystuje funkcjonalność jądra systemu operacyjnego, aby umożliwić uruchamianie aplikacji w izolowanych, lekkich kontenerach. W przeciwieństwie do tradycyjnej wirtualizacji typu VirtualBox, gdzie system operacyjny działa jako gość na maszynie wirtualnej, Docker umożliwia tworzenie kontenerów, w których uruchamiane są aplikacje. Każdy kontener zawiera wszystkie zależności aplikacji oraz potrzebne biblioteki, co pozwala na uruchamianie aplikacji w izolacji od innych procesów w systemie. Dzięki temu, Docker zapewnia większe bezpieczeństwo i niezawodność działania aplikacji.

Przykład infrastruktury skonteneryzowanych aplikacji:
![[docker-containerized-appliction-blue-border_2.webp]]

Przykład infrastruktury aplikacji w maszynach wirtualnych:
![[container-vm-whatcontainer_2.webp]]

źródło: https://www.docker.com/resources/what-container/

#### Oto kilka przykładów, jak Docker może być wykorzystany w konkretnych przypadkach użycia lub aplikacjach:

1.  Aplikacje webowe - Izolacja aplikacji w kontenerach pozwala na łatwe skalowanie, testowanie i wdrażanie aplikacji webowych na różnych środowiskach.
2.  Aplikacje internetowe - Izolacja różnych aplikacji internetowych w kontenerach ułatwia testowanie i wdrażanie aplikacji na różnych środowiskach, a także zapobiega problemom zależności między aplikacjami.
3.  Aplikacje mikroserwisowe - Konteneryzacja umożliwia łatwe skalowanie, testowanie i wdrażanie poszczególnych komponentów aplikacji mikroserwisowej, a także zapewnia izolację pomiędzy nimi.
4.  Aplikacje mobilne - Izolacja aplikacji mobilnych w kontenerach ułatwia testowanie i wdrażanie aplikacji na różnych urządzeniach mobilnych oraz wersjach systemu operacyjnego.

### Instalacja:

Nie zaleca się instalacji dockera z managera pakietów (np. apt). Paczki nie są w najnowszych wydaniach, często są nieaktualne. Zamiast tego polecam użyć skryptu, który automatycznie zainstaluje najnowszą wersję (dla ubuntu):

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

Źródło: https://docs.docker.com/engine/install/ubuntu/

Do szybkiego zapoznania się z podstawami polecam kurs video w języku polskim:
https://www.youtube.com/watch?v=wFcAa28kjVQ&list=PLkcy-k498-V5AmftzfqinpMF2LFqSHK5n

Na początku przygody z dockerem warto pożytkować się cheatsheet'em. Przyspiesza pracę i systematyzuje wiedzę:
https://docs.docker.com/get-started/docker_cheatsheet.pdf

Polecam zawsze przejrzeć samemu dokumentację w celu zagłębienia się w temat:
https://docs.docker.com/