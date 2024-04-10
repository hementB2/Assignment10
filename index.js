import('inquirer').then(({ default: inquirer }) => {
    // Prompt user for shape and color
    inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Triangle', 'Circle', 'Square']
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter a color:'
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
        shape.setColor(userInput.color);
        const svgContent = shape.render();

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
