# Components Documentation

## Layout Components

### Header

- **Purpose**: Main application header with navigation and user controls
- **Location**: `src/components/layout/Header.tsx`
- **Features**:
  - Site title that redirects to landing page
  - User button group integration
  - Consistent styling with primary theme colors

### Footer

- **Purpose**: Application footer with copyright information
- **Location**: `src/components/layout/Footer.tsx`
- **Features**:
  - Copyright text
  - Consistent styling with primary theme colors

### Content

- **Purpose**: Main content container managing view routing
- **Location**: `src/components/layout/Content.tsx`
- **Features**:
  - View management (Landing, Search, Product, Login)
  - Product data fetching and filtering
  - Loading and error state handling

## View Components

### LandingView

- **Purpose**: Homepage/welcome screen
- **Features**:
  - Conditional welcome message based on login status
  - "Start Shopping" call-to-action button

### SearchView

- **Purpose**: Product search and browsing interface
- **Features**:
  - Search header with back navigation
  - Product gallery display
  - Search filtering functionality

### ProductView

- **Purpose**: Detailed product information display
- **Features**:
  - Product details presentation
  - Back navigation
  - Add to cart functionality
  - Fallback handling for missing products

### LogView

- **Purpose**: Authentication interface
- **Features**:
  - Conditional rendering based on login status
  - Integration with LogViewQuantum for state management

## Button Components

### LogInButton

- **Purpose**: Authentication trigger button
- **Features**:
  - Login view activation
  - Icon-based interface
  - Hover state styling

### LogOutButton

- **Purpose**: User logout functionality
- **Features**:
  - Session termination
  - Navigation to landing page
  - Icon-based interface

### ShoppingBagButton

- **Purpose**: Cart access button
- **Features**:
  - Cart view navigation
  - Icon-based interface
  - Accessibility labeling

## Form Components

### LogInForm

- **Purpose**: User authentication form
- **Features**:
  - Dual-mode functionality (login/signup)
  - Email and password validation
  - Server communication
  - Error handling and user feedback
  - Automatic navigation after successful authentication

## Data Display Components

### ProductGallery

- **Purpose**: Grid display of product items
- **Features**:
  - Responsive grid layout
  - Product card presentation
  - Click handling for product selection
  - Empty state handling

## Quantum Components

Quantum components handle conditional rendering based on application state.

### LogButtonQuantum

- **Purpose**: Smart button switcher for authentication
- **Features**:
  - Conditional rendering between LogInButton and LogOutButton

### CartButtonQuantum

- **Purpose**: Smart cart button manager
- **Features**:
  - Conditional rendering of shopping bag based on login status

### LogViewQuantum

- **Purpose**: Smart authentication view manager
- **Features**:
  - Conditional rendering between login form and logged-in state

## Groups

### UserButtonGroup

- **Purpose**: Container for user-related buttons
- **Features**:
  - Organized layout for cart and authentication buttons

### SearchHeaderGroup

- **Purpose**: Search interface container
- **Features**:
  - Search input with icon
  - Navigation controls
  - Title display

## Text Components

### LoggedInText

- **Purpose**: Simple logged-in state indicator
- **Features**:
  - Status message display
  - Debug logging

## Component Dependencies

Most components rely on the following contexts:

- StoreContext: For view management and store state
- UserContext: For authentication state management

## Styling

Components utilize:

- Tailwind CSS for styling
- Lucide React for icons
- Consistent color scheme through primary/accent variables
- Responsive design patterns