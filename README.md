# This project is mainly developed using Storybook to test components on the go.

`npm package link` : https://www.npmjs.com/package/dev-ui-library-cb 

## Available Scripts

In the project directory, you can run:

### `npm run storybook`

Runs storybook locally to view changes in the components.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Snapshots of components

### Notification Component 
<img width="1433" alt="Screenshot 2024-04-30 at 9 48 38 PM" src="https://github.com/captainlazy/dev-ui-lib/assets/32818687/e9c16039-c088-4cc2-a0de-81ec50b1b0f6">

    <Notification type="success" message="$150,000 Deal closed" />
    <Notification type="error" message="$150,000 Deal closed" />


### Signup Form (foundation design as the retention page of ChargeBee)
<img width="1437" alt="Screenshot 2024-04-30 at 9 49 28 PM" src="https://github.com/captainlazy/dev-ui-lib/assets/32818687/e3813328-3544-4430-be49-038335fe4bb9">

### Card component
<img width="1432" alt="Screenshot 2024-04-30 at 9 50 04 PM" src="https://github.com/captainlazy/dev-ui-lib/assets/32818687/bb737bb2-9749-4e68-9cd1-5dcf65c0a81a">

    <Card
          heading={"Total Session"}
          textData={"Monthly Analysis"}
          impressions={"3,232"}
          color="green"
          label={"7%"}
        />


### Button component
<img width="1433" alt="Screenshot 2024-04-30 at 9 50 47 PM" src="https://github.com/captainlazy/dev-ui-lib/assets/32818687/5de2f83b-c551-465d-8033-61104540b249">

    export const Primary = {
      render: () => <Button primary label="Primary Button" />,
    };
    
    export const Secondary = {
      render: () => <Button primary={false} label="Secondary Button" />,
    };
    
    export const DemoCTA = {
      render: () => <CTAButton primary={false} demo={true} label="View Demo" />,
    };
    
    export const OutlineDemoCTA = {
      render: () => (
        <CTAButton primary={false} demo={false} label="Sign up for free" />
      ),
    };

### Badge Component
<img width="1432" alt="Screenshot 2024-04-30 at 9 51 02 PM" src="https://github.com/captainlazy/dev-ui-lib/assets/32818687/eba33242-ee09-475b-a59a-7d2fd1bfc428">

    export const DefaultBadge = {
      render: () => <Badge label="Badge" color="" />,
    };
    export const Red = {
      render: () => <Badge label="Badge" color="red" />,
    };
    export const Indigo = {
      render: () => <Badge label="Badge" color="indigo" />,
    };
    export const Blue = {
      render: () => <Badge label="Badge" color="blue" />,
    };
    export const Yellow = {
      render: () => <Badge label="Badge" color="yellow" />,
    };
    export const Green = {
      render: () => <Badge label="Badge" color="green" />,
    };
    
    export const Purple = {
      render: () => <Badge label="Badge" color="purple" />,
    };

### Bundler Used :
Babel used to compile exportable components. 
run `npm compile ` if changes are made



