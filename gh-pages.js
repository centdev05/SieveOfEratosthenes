var ghpages = require('gh-pages');

ghpages.publish(
    'dist',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/centdev05/SieveOfEratosthenes', // Update to point to your repository  
        user: {
            name: 'centdev05',
            email: 'centdev05@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)