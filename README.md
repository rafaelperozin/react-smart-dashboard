# Reusable and Dynamic Dashboard using SOLID + React + TypeScript

Splitting components is simple, and anyone can do it, but do it in the best way to not messy the code and be easy to read is a bigger challenge. So, we bring an exciting example of how to use SOLID with React.

## SOLID Principles: Quick overview

- **S - Single-responsibility**: A module should have only one reason to change, meaning that a module should have only one task. Meaning: Split your module to have unique functionalities. Manage the core functions, the actions and the types separated.
- **O - Open-closed**: Modules should be open for extension but closed for modification. Meaning: Don't change the core function, make it extendable.
- **L - Liskov Substitution**: Components and hooks in your module/project should be replaceable with instances of their subtypes without changing the module's correctness. Meaning: Create subclasses (different types of elements) that you can replace without breaking the code.
- **I - Interface Segregation**: Do not force the user to implement features that they don't use, and do not force the user to depend on methods they are not using. Meaning: The developer using your module could choose what type and action to use with no pre-conditions.
- **D - Dependency Inversion**: High-level modules with complex logic should be easy to reuse and can't be affected by changes in low-level modules that are providing utility features. Also, you must introduce an abstraction to decouple the high-level and low-level modules. Meaning: Decouple your module.


## What does this dashboard do?

It's possible to create multiple dashboards dynamically. You can use JSON data to generate how many widgets you need, and you can define different position, templates, colours and sizes for each one inside the dashboard.

Simply import the dashboard component and add use it like this:
```HTML
<Dashboard title="YOUR_DASHBOARD_NAME" widgets={YOUR_DATA} />
```
- title: string;
- widgets: Widgets;

## Data format

```typescript
interface Widgets {
  config: Configuration;
  data: Content;
}
```
```typescript
interface Configuration {
  type: WidgetType;
  position: WidgetPosition;
  template: WidgetTemplate;
}
```
```typescript
interface Content {
  title: string;
  value?: number;
  prev?: string;
  current?: string;
  items?: List[] | BarChart[];
}
```
Please, check the `app/src/components/Dashboard/dashboard.model.ts` and `app/src/components/Dashboard/dashboard.config.ts` to see all the types and interfaces.

## Install & Run

1. To install after clone the repository run `yarn`
2. To start the project after installing it, run `yarn start`

## Author

| [<img src="https://avatars.githubusercontent.com/u/35148593?v=4" width="150px;"/>](https://github.com/rafaelperozin) |
| :------------------------------------------------------------------------------------------------------------------: |
|                               [Rafael Perozin](https://linkedin.com/in/rafaelperozin)                                |


## Reference & Info

- The original article about [Reusable Components with React + SOLID + TypeScript](https://www.linkedin.com/pulse/reusable-share-button-using-solid-principles-react-rafael-perozin/) posted on Linkedin;

- [Reusable share button with SOLID + React + TypeScript](https://github.com/rafaelperozin/react-smart-share-button);
