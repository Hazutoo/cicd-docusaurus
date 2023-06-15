---
slug: ansible
title: Ansible - Streamlined Automation!
authors: [jdulewicz]
tags: [ansible, automation, management, configuration, infrastructure, deployment]
---


### What is it? 💡

Ansible is a tool for automating infrastructure administration, enabling server configuration and application deployment. Ansible operates agentlessly using the SSH protocol and allows for both ad-hoc management and the use of YAML configuration files called playbooks.

### Getting Started: 🚀

Start by generating SSH keys by typing the following command in the console:

```bash
ssh-keygen -t rsa -b 4096
```

- "-t" specifies the type of key, which is RSA (this is also the default value).
- "-b" specifies the key length, and in this case, we choose a length of 4096 bits for increased security.

After executing this command, you will be prompted to choose a location to save the key and enter a passphrase if you want to encrypt the key.

The private key will be saved in the ".ssh/id_rsa" file in your home directory, and the public key in the ".ssh/id_rsa.pub" file, also in your home directory.

Next, you need to copy the public key to the target machine by executing the command:

```bash
ssh-copy-id username@adres-serwera
```

Confirm saving the server's key on your machine, and then provide the password for the user you are logging in as. To check if everything is working, you can log into the target machine by executing the command:

```bash
ssh username@adres-serwera
```

If no password is required, it means the key has been successfully transferred.

To install Ansible, execute the following commands:


```bash
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository --yes --update ppa:ansible/ansible
sudo apt install ansible -y
```

At this point, you can create a file (name it as you like):

```bash
nano hosts
```

Add the IP addresses of the machines, for example:

```
[ubuntu]
192.168.1.1
192.168.1.2
192.168.1.3
```

This will allow you to start executing your playbooks using Ansible.

Execute the following command in the console:

```bash
ansible-playbook path/to/playbook.yaml --user username -i path/to/hostslist.yaml
```

- 'ansible-playbook' is the command used to run playbooks in Ansible.
- 'path/to/playbook.yaml' is the path to the playbook file you want to run.
- '--user username' is the parameter specifying the username you want to log in as on the target machines.
- '-i path/to/hostslist' is the parameter specifying the path to the hosts list file that contains the IP addresses of the target machines.

After executing this command, Ansible will run the playbook and start executing the instructions specified in the playbook file on the target machines. Make sure to provide the correct path to the playbook and hosts list file, as well as the appropriate username, to ensure the playbook is executed correctly.

Below, I am attaching a link to my public GitHub repository that contains Ansible playbooks:

https://github.com/Hazutoo/ansible-playbooks

