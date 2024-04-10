import('inquirer').then(({ default: inquirer }) => {
    // Prompt user for text, text color, shape, and shape color
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo (up to three characters):',
            validate: function (input) {
                return input.length <= 3 ? true : 'Text should be up to three characters.';
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hexadecimal):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Triangle', 'Square', 'Circle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hexadecimal):'
        }
    ]).then(userInput => {
        // Import shape classes based on user input
        let Shape;
        switch (userInput.shape) {
            case 'Triangle':
                Shape = require('./lib/shapes').Triangle;
                break;
            case 'Circle':
                Shape = require('./lib/shapes').Circle;
                break;
            case 'Square':
                Shape = require('./lib/shapes').Square;
                break;
            default:
                console.error('Invalid shape!');
                process.exit(1);
        }

        // Create instance of shape, set color, and render SVG
        const shape = new Shape();
        shape.setColor(userInput.shapeColor);
        const svgContent = `
          <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userInput.textColor}">${userInput.text}</text>
          </svg>
        `;

        // Import the 'fs' module for file operations
        import('fs').then(({ default: fs }) => {
            // Save SVG code to file
            const filename = `${userInput.shape.toLowerCase()}.svg`;
            fs.writeFileSync(filename, svgContent);
            console.log(`SVG file '${filename}' generated successfully.`);
        }).catch(err => {
            console.error('Error loading fs module:', err);
        });
    }).catch(err => {
        console.error('Error with inquirer:', err);
    });
}).catch(err => {
    console.error('Error loading inquirer:', err);
});

