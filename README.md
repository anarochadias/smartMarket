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

The database is organized into distinct files, each serving a specific purpose:

1. **DbCreation:** This file is composed of all the scripts responsible for table creation.

2. **Functions:** Within this file, a collection of custom functions tailored to the database's requirements can be found.

3. **Inserted Data:** data that has been inserted into the database, providing examples.

4. **Procedures and Stored Procedures:** A section containing a comprehensive set of procedures, like inserts, updates, and deletes for each individual table. 
  
5. **Trigger:** A  trigger serves to populate the Historico Table, capturing historical changes within a product.

6. **Views:** A selection of  views has been created, for easier access to the database contents.

In essence, this repository represents a holistic and methodical approach to database design, implementation, and data management, fostering efficiency, organization, and informed decision-making.

<h2 id="API"> 2. API </h2>
Certainly, let's break down what an API is, how Swagger works, and how Microsoft Visual Studio fits into the picture:

## What is an API?

An **API (Application Programming Interface)** is a set of rules, protocols, and tools that allows different software applications to communicate and interact with each other. It defines the methods and data structures that developers can use to interact with a particular software component, service, or system. APIs enable developers to build applications that can leverage the functionality of other services without needing to understand their internal workings.

## How Swagger Works:

**Swagger**, now known as the **OpenAPI Specification**, is a framework for describing and documenting APIs in a standardized and machine-readable format. It allows developers to define the structure of API endpoints, request and response data models, authentication methods, and more. Swagger provides several benefits:

1. **Documentation:** Swagger generates interactive and human-readable documentation for your API. This documentation includes information about endpoints, their parameters, expected data formats, and sample requests.

2. **Testing:** With the Swagger UI, developers can test API endpoints directly from the documentation. This enables quick and easy validation of endpoints during development.

3. **Code Generation:** Swagger can automatically generate client SDKs, server stubs, and API documentation for various programming languages. This accelerates development by providing ready-to-use code snippets for interacting with the API.

4. **Consistency:** By adhering to the OpenAPI Specification, APIs become more consistent and easily understandable across different teams and projects.

## How Microsoft Visual Studio Fits:

**Microsoft Visual Studio** is an integrated development environment (IDE) that offers a comprehensive suite of tools for building, debugging, and deploying software applications. When it comes to creating APIs with Swagger:

1. **Project Setup:** Visual Studio provides templates for creating various types of projects, including API projects. These templates set up the initial structure of the project, including controllers and routes.

2. **API Implementation:** Developers use Visual Studio to define API endpoints, business logic, data models, and other components of the API.

3. **Swagger Integration:** Visual Studio can integrate Swagger seamlessly into the API project. This integration allows developers to annotate API controllers and models with Swagger attributes that define the API's structure and behavior.

4. **Documentation Generation:** Once Swagger attributes are added to the API code, Visual Studio, often with the help of additional packages, generates the corresponding Swagger documentation. This documentation can be accessed via the Swagger UI.

5. **Testing:** Developers can test API endpoints directly from the Swagger UI within Visual Studio, enabling rapid testing and debugging.

6. **Code Generation:** Visual Studio, along with Swagger, can facilitate the generation of client-side code that interacts with the API, reducing the effort needed to consume the API in other applications.

In summary, Swagger and Microsoft Visual Studio work in tandem to streamline the creation, documentation, and consumption of APIs. Swagger's standardized format and tools enhance API documentation and interaction, while Visual Studio provides a development environment to implement, test, and manage APIs seamlessly.

<h2 id="web"> 3. Database </h2>
