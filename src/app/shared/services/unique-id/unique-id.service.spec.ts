import { UniqueIdService } from './unique-id.service';


describe(UniqueIdService.name, ()=>{

  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  })

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {

    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });


  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate duplicate ids when called multiples times`, () =>{

      const ids = new Set();
      for(let i=0; i < 50; i++){
        ids.add(service.generateUniqueIdWithPrefix('app-'));
      }
      expect(ids.size).toBe(50);
  });


  it(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueIds.name} should return the number of generatedIds when called`,() => {
    const firstId = service.generateUniqueIdWithPrefix('app');
    const secondId = service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGenerateUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw when called with empty`, () => {
    const emptyValue = [null,undefined,'','0','1'];
    emptyValue.forEach(emptyValue => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValue)).withContext(`EmptyValue: ${emptyValue}`).toThrow();
    });
  });



});

// expect(true).toBeTrue(); // ele só testa se o valor é verdadeiro , testo o valor tem que ser literal, não pode ser criado uma instância de boolean.
// expect(true).toBeTruthy(); // ele é o mais genérico de todos
// expect(true).toBe(true); // ele compara se um valor é igual ao outro, mas se eu estou trabalhando com literal, comparando com o valor, com o objeto boolean eles são diferentes, e se eu comparar com dois booleans, duas instâncias diferentes, vai ser diferente porque eles estão apontando para endereços diferentes na memória.
