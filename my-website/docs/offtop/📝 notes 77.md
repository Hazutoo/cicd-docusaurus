# Zarządzanie użytkownikami

1. 1. Załóż jednym poleceniem (nie interaktywnie!) użytkownika o nazwie ‘$user’. Spraw, aby jego główną grupą użytkownika była ‘zarzad‘, a grupy pomocnicze to ‘adm’ oraz ‘audio’. Marian ma mieć powłokę ustawioną na /bin/sh.

```bash
useradd -g zarzad -G adm -G audio -s /bin/sh $user
```

```
# check groups and primary group
id Marian

# check shell
grep Marian /etc/passwd
```

2. Spraw, aby każdy nowo założony użytkownik w systemie miał w swoim katalogu plik ‘regulamin.txt’ z jakimś krótkim tekstem w środku.

```bash
mkdir /etc/skel-custom
echo "regulamin..." > /etc/skel-custom/regulamin.txt
cp -a /etc/skel/. /etc/skel-custom/
```

	The `-a` option is an improved recursive option, that preserve all file attributes, and also preserve symlinks.
	The `.` at end of the source path is a specific `cp` syntax that allow to copy all files and folders, included hidden ones.
	
https://askubuntu.com/questions/86822/how-can-i-copy-the-contents-of-a-folder-to-another-folder-in-a-different-directo

```bash
useradd -m -k /etc/skel-custom $user
```

3. Zmień użytkownikowi $user powłokę na /usr/bin/nano (to nie jest poprawny shell! Musisz to jakoś obejść). Gdy Ci się uda, zmień mu powłokę na /bin/bash, aby dało się na tym użytkowniku nadal pracować.

```bash
# valid login shells
cat /etc/shells

# answer:
chsh -s /usr/bin/nano $user
chsh -s /bin/bash $user
```

4. Ustaw użytkownikowi ‘Marian’ hasło ‘banany69’, ale w sposób nieinteraktywny, za pomocą jednego polecenia.

```bash
echo "username:cleartext_password" | sudo chpasswd
```

5. Wykonaj polecenie ‘whoami’ jako Marian, ale będąc zalogowanym jako root.

```bash
sudo -u Marian whoami
```

6. Zmień (jednym poleceniem) podstawową grupę użytkownika ‘Marian’ na ‘pracownicy’. Jeśli jest taka potrzeba, to przy okazji utwórz taką grupę.

```bash
# idk how to once:
groupadd pracownicy
usermod -g pracownicy Marian
```

7. Wymuś na użytkowniku ‘Marian’ regularną zmianę hasła co 7 dni (jednym poleceniem).

```bash
chage -M 7 Marian
```

8. Zablokuj konto ‘Marian’ tak, aby nie dało się na niego zalogować (nie chodzi o zmianę hasła, ani usunięcie konta), a później ponownie odblokuj tego użytkownika.

```bash
usermod Marian -s /sbin/nologin
```

9. Spraw, aby nowo zakładani użytkownicy mieli automatycznie przypisywane numery ID od 8000 w górę.

```bash
nano /etc/login.defs
# Min/max values for automatic uid selection in useradd
#
UID_MIN			 8000
```

10. Spraw, aby Marian po zalogowaniu się na swoje konto zobaczył aktualny uptime i load na serwerze (zakładamy, że Marian używa basha)

```bash
nano /home/Marian/.bashrc
# add line to file:
uptime
```

11. Spraw, aby użytkownik ‘Marian’ mógł uruchomić maksymalnie 5 procesów jednocześnie.

```bash
nano /etc/security/limits.conf
# add line to file:
Marian          hard    nproc           5
```

# Zarządzanie plikami

