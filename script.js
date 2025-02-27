document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('command-input');
    const output = document.querySelector('.output');

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = input.value.trim();
            processCommand(command);
            input.value = '';
        }
    });

    function processCommand(command) {
        const response = document.createElement('div');
        response.textContent = `${command}`;
        output.appendChild(response)(echo);

        // Add your command handling logic here
        if (command === 'help') {
            const helpText = document.createElement('div');
            helpText.textContent = 'Available commands: help, about, clear, echo';
            output.appendChild(helpText);
        } else if (command === 'about') {
            const aboutText = document.createElement('div');
            aboutText.textContent = 'This is a simple command prompt website.';
            output.appendChild(aboutText);
        } else if (command === 'clear') {
            output.innerHTML = '';
        } else {
            const errorText = document.createElement('div');
            errorText.textContent = `Command not found: ${command}`;
            output.appendChild(errorText);
        }

        // Scroll to the bottom of the output
        output.scrollTop = output.scrollHeight;
    }
});