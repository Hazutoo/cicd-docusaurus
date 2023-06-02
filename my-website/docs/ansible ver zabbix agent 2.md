Open sidebar

# Ansible playbook for Zabbix.

Model: GPT-4

![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2738%27%20height=%2738%27/%3e)![User](https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAGNmyxZjW6i9KWvXodkBQN2-B0JwRiduZFQset_8VwBo%3Ds96-c&w=96&q=75)

write ansible playbook: install or upgrade zabbix agent to v2 with ubuntu version recognition

ChatGPT

Ansible playbooks are written in YAML format. To create a playbook that installs or upgrades the Zabbix agent to version 2 on Ubuntu, you can follow these steps:

1.  First, create a new file named `zabbix_agent_install_upgrade.yml`.
2.  Add the following content to the file:

yamlCopy code

`--- - name: Install or upgrade Zabbix agent to v2 with Ubuntu version recognition   hosts: all   become: yes   vars:     zabbix_agent_version: "2.0.0"     zabbix_agent_package_name: "zabbix-agent2"    tasks:     - name: Retrieve Ubuntu version       ansible.builtin.shell: "lsb_release -cs"       register: ubuntu_version       changed_when: false      - name: Add Zabbix repository       ansible.builtin.apt_repository:         repo: "deb https://repo.zabbix.com/zabbix/2.0/ubuntu {{ ubuntu_version.stdout }} main"         state: present      - name: Import Zabbix repository GPG key       ansible.builtin.apt_key:         url: "https://repo.zabbix.com/zabbix-official-repo.key"         state: present      - name: Update apt cache       ansible.builtin.apt:         update_cache: yes      - name: Install or upgrade Zabbix agent       ansible.builtin.apt:         name: "{{ zabbix_agent_package_name }}"         state: latest         version: "{{ zabbix_agent_version }}*"      - name: Enable and start Zabbix agent service       ansible.builtin.systemd:         name: "{{ zabbix_agent_package_name }}"         state: started         enabled: yes`

3.  Save the file.
4.  Run the playbook using the following command:

bashCopy code

`ansible-playbook -i inventory.ini zabbix_agent_install_upgrade.yml`

Replace `inventory.ini` with the path to your inventory file, which should contain the list of target Ubuntu hosts.

This playbook installs or upgrades the Zabbix agent to version 2.0.0 by adding the Zabbix repository, importing the GPG key, updating the apt cache, installing/upgrading the package, and enabling/starting the Zabbix agent service. The playbook also includes a task to recognize the Ubuntu version and use it for repository configuration.

ChatGPT may produce inaccurate information about people, places, or facts. [ChatGPT May 3 Version](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

New chat

