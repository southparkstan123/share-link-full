# Database Configuration
Before to startup this application, you should :
1. Create the database for development in postgre shell
2. (Optional) Setting the permission of database for development by 'psql -U <user_name> -W -h <hostname> <DB_name>'
3. Modify the 'config/config.json' setting according to the database for both development and testing(for example user_name, password, DB_name, host).
4. Install the Command-line tool for Sequelize by 'sudo npm install -g sequelize-cli'

# Backend Configuration
Following step to startup the server-side of share-link-full :
1. Clone the repository from Github
2. Run 'npm install' to install the package for server-side code
3. Run 'sequelize db:migrate' to do migrate 
4. Run 'npm start' to start the app

# Database Seed(Optional)
Using 'sequelize:db:seed' to generate some fake records in database

# Frontend(Angular) Configuration
Following step to startup the client-side of share-link-full :
1. Open another terminal window and change the directory by 'cd client'
2. Run 'npm install' to install the package for client-side code
3. Run 'ng build --watch' to build

Visit 'http://localhost:8080/' on web browser! Enjoy!

# Run Test Case
Following step to startup the share-link-full-test :
1. Install jasmine by 'npm install -g jasmine'
2. Copy the database from development for test in postgre shell
3. (Optional) Setting the database by 'psql -U <user_name> -W -h <hostname> <DB_name>'
4. Run 'npm test' to run the test case
