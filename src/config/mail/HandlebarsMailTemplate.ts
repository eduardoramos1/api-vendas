import Handlebars from 'handlebars';
import fs from 'fs';

// Porque não sabemos exatamente quais serão as informações que estarão dentro de variables é possivel deixar dinamico dessa forma
interface ITemplateVariables {
  [key: string]: string | number;
}

interface IParseMailTemplate {
  file: string;
  variables: ITemplateVariables;
}

export default class HandlebarsMailTemplate {
  public async parse({ file, variables }: IParseMailTemplate): Promise<string> {
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });
    const parseTemplate = Handlebars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}
