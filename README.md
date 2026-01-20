🏥 **MedInventory**

MedInventory is a web-based healthcare inventory and drug authentication platform designed to help hospitals, pharmacies, and clinics efficiently manage medical supplies, verify drug authenticity, and receive critical alerts — with a focus on accessibility and scalability for African healthcare systems.
🚀 Live Demo

🔗 Deployed App: (med-invent.netlify.app)
🔗 GitHub Repository: (https://github.com/okemagnus/medi-care-app)

🧩 **Project Overview**

MedInventory addresses common challenges in healthcare supply chains such as poor record keeping, counterfeit drugs, and lack of real-time inventory visibility. The platform provides a centralized system for managing inventory, authenticating drugs, and notifying users of critical events like low stock and expiring medications.

This project was built as an individual React application and is actively being scaled into a production-ready system.

✨ Core Features
🔐 Authentication

User login and signup flow

Authentication state managed globally using React Context

Protected routes to restrict access to authorized users

📦 Inventory Management

Add, view, and manage medical inventory items

Track stock levels and product details

Organized inventory dashboard

🧪 Drug Authentication

Verify drugs using Drug ID, batch number, NAFDAC number, and expiry date

Local authentication database (localStorage)

Valid, expired, and invalid drug detection

🚨 Alerts & Notifications

In-app notifications for system events

Unread alerts badge in sidebar

Alerts stored and managed persistently

🎨 Theme Support

Light and dark mode toggle

Theme state managed using React Context

Consistent styling across all pages

📱 Responsive UI

Mobile-friendly layout

Sidebar navigation with responsive toggle

Optimized for desktop and tablet use

🛠️ **Tech Stack**

Frontend: React (Functional Components)

Routing: React Router

State Management: React Context API + Hooks

Authentication: Firebase Authentication

Styling: CSS (Modular stylesheets)

Icons: Lucide React

Deployment: Netlify

🔄 **Application Flow**

Users access the homepage (public)

Login or signup is required to access internal pages

Authenticated users can:

Manage inventory

Authenticate drugs

View alerts and notifications

User session persists across page reloads

Logout returns the user to the homepage

🧱 **Project Structure**
src/
 ├─ components/        # Reusable UI components
 ├─ pages/             # Page-level components
 ├─ contexts/          # Theme & Authentication contexts
 ├─ styles/            # CSS stylesheets
 ├─ utils/             # Helper functions
 ├─ App.jsx
 └─ main.jsx

♿ **Accessibility & Usability**

Clear navigation and readable typography

Keyboard-friendly form controls

High-contrast themes for better visibility

Simple, intuitive user flows

🧪 Testing & Quality

Manual functional testing across pages

State persistence verified on refresh

Clean, modular, and readable codebase

Meaningful variable and component naming

🔮 Future Roadmap

Planned enhancements include:

Role-based access control (Admin / Staff)

Barcode & QR code scanning for drug authentication

Backend API integration

Real-time notifications

Audit logs and analytics

Exportable reports (CSV / PDF)

Improved mobile navigation

👤 **Author**

**Okechi Onyenakasa**
Frontend Developer
📍 Nigeria

📄 **License**

This project is for educational and demonstration purposes.