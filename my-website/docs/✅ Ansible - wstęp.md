### Czym jest Ansible?

Ansible to narzędzie do automatyzacji administracji infrastruktury, umożliwiające konfigurację serwerów i dostarczanie aplikacji. Ansible działa bezagentowo z użyciem protokołu SSH i pozwala na zarządzanie zarówno ad-hoc, jak i z wykorzystaniem plików konfiguracyjnych YAML, zwanych playbookami.

### Wstęp do działania:

Rozpocznij od generowania kluczy SSH, wpisując w konsoli:

```bash
ssh-keygen -t rsa -b 4096
```

- "-t" oznacza rodzaj klucza, którym jest RSA (jest to również wartość domyślna).
-  "-b" określa długość klucza, a w tym przypadku wybieramy długość 4096 bitów dla większego bezpieczeństwa. 

Po wywołaniu tego polecenia zostaniesz poproszony o wybór miejsca zapisu klucza oraz o wprowadzenie hasła, jeśli chcesz zaszyfrować klucz.

Klucz prywatny zostanie zapisany w pliku ".ssh/id_rsa" w Twoim katalogu domowym, a klucz publiczny w pliku ".ssh/id_rsa.pub", również w Twoim katalogu domowym.

Następnie należy przesłać klucz publiczny na maszynę docelową, wykonując polecenie:

```bash
ssh-copy-id username@adres-serwera
```

Potwierdź zapisanie klucza serwera na swojej maszynie, a następnie podaj hasło użytkownika, na którego się logujesz. Aby sprawdzić, czy wszystko działa, można zalogować się na maszynę docelową, wykonując polecenie:

```bash
ssh username@adres-serwera
```

Jeśli nie jest wymagane podanie hasła, oznacza to, że klucz został poprawnie przesłany.

Aby zainstalować Ansible, wykonaj następujące polecenia:

```bash
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository --yes --update ppa:ansible/ansible
sudo apt install ansible -y
```

W tym momencie możesz stworzyć plik (nazwa dowolna):

```bash
nano hosts
```

Dodaj adresy maszyn, na przykład:

```
[ubuntu]
192.168.1.1
192.168.1.2
192.168.1.3
```

Dzięki temu możesz zacząć wykonywać swoje playbooki przy użyciu Ansible. Tworzenie i uruchamianie 