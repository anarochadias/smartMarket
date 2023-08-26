# SmartMarket
This project was made in collaboration with: [Ana](https://github.com/abeingadrift), [Filipa](https://github.com/filipafaraujo) and [Miguel](https://github.com/mikeecunha).

This project was made for a number of subjects in the upskill Power Platform course.

## Overview

SmartMarket was a project designed to revolutionize grocery shopping by introducing an innovative app. The primary objective of this app was to help users find the most competitive prices for their grocery items. Regrettably, due to time constraints, our team was unable to finish the app. Nevertheless, we successfully developed the foundational components including a database and some forms. These components allowed us to create, update, and delete various items within the database. 

## Index
<p>
  <a href="#dabase">
    1. Database
  </a>
</p>
<p>
  <a href="#API">
    2. API
  </a>
</p>
<p>
  <a href="#web">
    3. Website
  </a>
</p>


<h2 id="dabase"> 1. Database </h2>

The database was created using the SQL Server language within SQL Management Studio. Itis composed of 14 tables, such as products, stores, users, and various others. Representation of this database can be visualized through the provided diagram.

![diagramaSmartMarket](https://github.com/inesalves44/smartMarket/assets/105734074/de36abba-eea4-497f-a05b-4eed9bf50aa7)


The database is organized into distinct files, each serving a specific purpose:

1. **DbCreation:** This file is composed of all the scripts responsible for table creation.

2. **Functions:** Within this file, a collection of custom functions tailored to the database's requirements can be found.

3. **Inserted Data:** data that has been inserted into the database, providing examples.

4. **Procedures and Stored Procedures:** A section containing a comprehensive set of procedures, like inserts, updates, and deletes for each individual table. 
  
5. **Trigger:** A  trigger serves to populate the Historico Table, capturing historical changes within a product.

6. **Views:** A selection of  views has been created, for easier access to the database contents.

In essence, this repository represents a methodical approach to database design, implementation, and data management.

<h2 id="API"> 2. API </h2>

### 2.1. What is an API?

An **API (Application Programming Interface)** is a set of rules, protocols, and tools that allows different software applications to communicate and interact with each other. It defines the methods and data structures that developers can use to interact with a particular software component, service, or system. APIs enable developers to build applications that can leverage the functionality of other services without needing to understand their internal workings.

#### 2.2.1 How Swagger Works:

**Swagger**, now known as the **OpenAPI Specification**, is a framework for describing and documenting APIs in a standardized and machine-readable format. It allows developers to define the structure of API endpoints, request and response data models, authentication methods, and more. Swagger provides several benefits:

1. **Documentation:** Swagger generates interactive and human-readable documentation for your API. This documentation includes information about endpoints, their parameters, expected data formats, and sample requests.

2. **Testing:** With the Swagger UI, developers can test API endpoints directly from the documentation. This enables quick and easy validation of endpoints during development.

3. **Code Generation:** Swagger can automatically generate client SDKs, server stubs, and API documentation for various programming languages. This accelerates development by providing ready-to-use code snippets for interacting with the API.

4. **Consistency:** By adhering to the OpenAPI Specification, APIs become more consistent and easily understandable across different teams and projects.

### 2.2. How Microsoft Visual Studio Fits:

**Microsoft Visual Studio** is an integrated development environment (IDE) that offers a comprehensive suite of tools for building, debugging, and deploying software applications. When it comes to creating APIs with Swagger:

1. **Project Setup:** Visual Studio provides templates for creating various types of projects, including API projects. These templates set up the initial structure of the project, including controllers and routes.

2. **API Implementation:** Developers use Visual Studio to define API endpoints, business logic, data models, and other components of the API.

3. **Swagger Integration:** Visual Studio can integrate Swagger seamlessly into the API project. This integration allows developers to annotate API controllers and models with Swagger attributes that define the API's structure and behavior.

4. **Documentation Generation:** Once Swagger attributes are added to the API code, Visual Studio, often with the help of additional packages, generates the corresponding Swagger documentation. This documentation can be accessed via the Swagger UI.

5. **Testing:** Developers can test API endpoints directly from the Swagger UI within Visual Studio, enabling rapid testing and debugging.

6. **Code Generation:** Visual Studio, along with Swagger, can facilitate the generation of client-side code that interacts with the API, reducing the effort needed to consume the API in other applications.

In summary, Swagger and Microsoft Visual Studio work in tandem to streamline the creation, documentation, and consumption of APIs. 

<h2 id="web"> 3. Website </h2>

The final website was created using Angular.

### 3.1. What is Angular?

Angular is a popular open-source web development framework maintained by Google. It's designed to simplify the process of creating dynamic and interactive web applications. Angular helps developers build single-page applications (SPAs) where content updates without requiring a full page reload. It uses a combination of HTML templates for structure, TypeScript for logic, and CSS for styling. Angular's modular architecture encourages the creation of reusable components that can be combined to create complex applications. It also provides features like two-way data binding, dependency injection, and routing, which make it easier to manage application state, handle user interactions, and navigate between different views. Overall, Angular streamlines web development by offering a structured approach and a set of tools that assist developers in building robust and feature-rich web applications.

### 3.2 How our website works?

Our website mainly consists of a homepage and a few forms. These forms help us update, delete, and add elements to our database. The homepage provides a starting point, and the forms allow us to interact with the database in specific ways.

Elements of the Angular we used:

1. **Components**: Components are the fundamental building blocks of Angular applications. They consist of HTML templates, TypeScript code for logic, and CSS for styling. Each component represents a part of the user interface and encapsulates its own behavior and appearance. Components are organized in a hierarchical structure and can communicate with each other through input and output properties.

2. **Modules**: Modules are used to organize and encapsulate different parts of an application. An Angular application is typically divided into multiple modules, each serving a specific purpose. The root module, often named `AppModule`, is the entry point of the application. Modules help manage dependencies, provide a context for lazy loading, and keep the application structure organized.

3. **Directives**: Directives are instructions in the DOM (Document Object Model) that modify the behavior or appearance of HTML elements. Angular offers two main types of directives: structural directives (like `ngIf` and `ngFor`) that control the layout of the DOM, and attribute directives (like `ngStyle` and `ngClass`) that modify individual elements.

4. **Services**: Services are reusable code units that provide specific functionality, such as data fetching, authentication, or logging. They are typically injected into components or other services and promote the separation of concerns by keeping business logic separate from the user interface.

5. **Routing**: Angular provides a powerful routing mechanism that enables the creation of single-page applications with multiple views. The `RouterModule` allows you to define routes for different components, enabling users to navigate between different sections of the application without full page reloads.

6. **Forms**: Angular offers a sophisticated forms module for handling user input. Reactive Forms use an explicit and reactive approach to form handling, while Template-driven Forms are more declarative and rely on Angular's template syntax.

7. **HTTP Client**: The `HttpClientModule` provides a way to make HTTP requests to APIs and external services. It offers methods to send different types of HTTP requests and handles responses in an observable-based manner.
