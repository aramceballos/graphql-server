/* eslint-disable no-underscore-dangle */
const courses = [
  {
    _id: 'anyid',
    title: 'React Avanzado',
    teacher: 'Midudev',
    description: 'Curso de React Avanzado',
    topic: 'Programacion',
  },
  {
    _id: 'anyid2',
    title: 'Graphql Basico',
    teacher: 'Morfeo',
    description: 'Curso basico de Graphql',
    topic: 'Programacion',
  },
  {
    _id: 'anyid3',
    title: 'CRUD en Python',
    teacher: 'David Aroesti',
    description: 'Curso de creacion de CRUD en Python',
    topic: 'Programacion',
  },
];

module.exports = {
  Query: {
    courses: () => courses,
    course: (root, args) => {
      const filteredCourse = courses.filter(
        (course) => course._id === args.id,
      )[0];
      return filteredCourse;
    },
  },
};
