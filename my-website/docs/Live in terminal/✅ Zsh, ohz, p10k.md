![[Pasted image 20230502135610.png]]

Za pomocą tego skryptu zainstalujemy zsh - popularną powłokę dla systemów UNIX, a następnie oh-my-zsh - zestaw wtyczek oraz ustawień konfiguracyjnych dla zsh. Po tym zainstalujemy powerlevel10k - motyw zsh z wieloma opcjami dostosowywania wyglądu.

```bash
sudo apt install zsh &&
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k &&
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc &&
exit
```

Po zainstalowaniu powerlevel10k warto również dodać dwie dodatkowe wtyczki - zsh-autosuggestions i zsh-syntax-highlighting.

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions  
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting
```

W przypadku problemów z wyglądem powerlevel10k zalecam udać 
się do wątku:

https://github.com/romkatv/powerlevel10k/issues/671

Źródła:
https://github.com/romkatv/powerlevel10k
https://ohmyz.sh/
https://github.com/zsh-users/zsh-autosuggestions
https://github.com/zsh-users/zsh-syntax-highlighting
