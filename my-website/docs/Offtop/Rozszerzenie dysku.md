echo 1>/sys/class/block/sdb/device/rescan
df -h
sudo fdisk /dev/sda

p - partycje
d - usuwanie
n - nowa
w - zapis

NIE USUWAĆ SYGNATUR

sudo fdisk -l
sudo pvresize /dev/sda3
sudo lvdisplay
sudo lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv[lv path]
df -h
sudo resize2fs /dev/ubuntu-vg/ubuntu-lv
df -h

/dev/mapper/ubuntu--vg-ubuntu--lv 


dotnet powershel
