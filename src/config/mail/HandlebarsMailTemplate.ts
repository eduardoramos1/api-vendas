import Handlebars from 'handlebars';

// Porque não sabemos exatamente quais serão as informações que estarão dentro de variables é possivel deixar dinamico dessa forma
interface ITemplateVariables {
  [key: string]: string | number;
}

interface IParseMailTemplate {
  template: string;
  variables: ITemplateVariables;
}

export default class HandlebarsMailTemplate {
  public parse({ template, variables }: IParseMailTemplate): string {
    const parseTemplate = Handlebars.compile(template);

    return parseTemplate(variables);
  }
}
