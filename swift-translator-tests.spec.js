const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    
    {
      tcId: 'Pos_Fun_001',
      name: 'Convert polite request question',
      input: 'karunaakaralaa mata udhavvak karanna puluvandha?',
      expected: 'කරුනාකරලා මට උදව්වක් කරන්න පුලුවන්ද?',
      category: ' Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Convert simple present tense statement',
      input: 'api dhaen vaeda karanavaa.',
      expected: 'අපි දැන් වැඩ කරනවා.',
      category: 'Daily language usage',
      grammar: ' Present tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'Convert negative capability sentence',
      input: 'mata eeka karanna bae.',
      expected: 'මට ඒක කරන්න බැ.',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_004',
      name: 'Convert future tense statement',
      input: 'mama heta enavaa kiyala kiyanna.',
      expected: 'මම හෙට එනවා කියල කියන්න.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'Convert conditional sentence',
      input: 'vaessa unath api yanna epaeyi.',
      expected: 'වැස්ස උනත් අපි යන්න එපැයි.',
      category: 'Daily language usage',
      grammar: ' Complex sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_006',
      name: 'Convert imperative instruction',
      input: 'puluvan tharam ikmanata oyaala issarahata yanna.',
      expected: 'පුලුවන් තරම් ඉක්මනට ඔයාල ඉස්සරහට යන්න.',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_007',
      name: 'Convert greeting phrase',
      input: 'suba udhaeesanak!',
      expected: 'සුබ උදෑසනක්!',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Convert plural pronoun question',
      input: 'oyaalaa heta enavadha?',
      expected: 'ඔයාලා හෙට එනවද?',
      category: 'Daily language usage',
      grammar: 'Pronoun variation',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Convert sentence with place name',
      input: 'api Kandy vala dhaLadhaa maligaavata yamudha.',
      expected: 'අපි Kandy වල දළදා මලිගාවට යමුද.',
      category: 'Names / places / common English words',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    
    // Commands
    {
      tcId: 'Pos_Fun_010',
      name: 'Convert sentence with currency value',
      input: 'mata hadhissiyakata Rs. 2500 onee.',
      expected: 'මට හදිස්සියකට Rs. 2500 ඔනේ.',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Convert sentence with time format',
      input: 'meeting eka udhee 7.30 AM patan gannavaa.',
      expected: 'meeting එක උදේ 7.30 AM පටන් ගන්නවා.',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_012',
      name: 'Convert sentence with technical terms',
      input: 'oyage WiFi connection eka hariyata vaeda karanavaa.',
      expected: 'ඔයගෙ WiFi connection එක හරියට වැඩ කරනවා.',
      category: ' Mixed Singlish + English',
      grammar: 'Present tense',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'Convert repeated-word emphasis',
      input: 'hari hari mama ennam.',
      expected: 'හරි හරි මම එන්නම්.',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_014',
      name: 'Convert multi-line input',
      input: 'mama nam gedhara yanavaa. oyaa enavadha?',
      expected: 'මම නම් ගෙදර යනවා. ඔයා එනවද?',
      category: 'Formatting (spaces / line breaks)',
      grammar: ' Interrogative (question)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_015',
      name: 'Convert long paragraph input',
      input: 'adha udhee patan gaththa loku vaessayi hulagayi ekka gamata loku prashnayak unaa. godak paaraval valata vathura dhaemma nisaa vaahana valata yanna godak amaaru unaa. ehema unath gamee minisunta udhav karanna authorities ikmanin kriyaa karala thiyenavaa kiyala news valin mama dhaekkaa. eeka dhaekkata passe magee hithata loku saenasiimak dhaenunaa.',
      expected: 'අද උදේ පටන් ගත්ත ලොකු වැස්සයි හුලගයි එක්ක ගමට ලොකු ප්‍රශ්නයක් උනා. ගොඩක් පාරවල් වලට වතුර දැම්ම නිසා වාහන වලට යන්න ගොඩක් අමාරු උනා. එහෙම උනත් ගමේ මිනිසුන්ට උදව් කරන්න authorities ඉක්මනින් ක්‍රියා කරල තියෙනවා කියල news වලින් මම දැක්කා. ඒක දැක්කට පස්සෙ මගේ හිතට ලොකු සැනසීමක් දැනුනා.',
      category: 'Formatting (paragraph)',
      grammar: 'Complex sentence',
      length: 'L'
    },
    
    
    {
      tcId: 'Pos_Fun_016',
      name: 'Convert informal request',
      input: 'ane eeka dhiyan ban.',
      expected: 'අනෙ ඒක දියන් බන්.',
      category: ' Slang / informal language',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'Convert sentence with abbreviation',
      input: 'OTP eka evanna.',
      expected: 'OTP එක එවන්න.',
      category: 'Mixed Singlish + English',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_018',
      name: 'Convert simple affirmative daily activity sentence',
      input: 'mama dhaen gedhara inne.',
      expected: 'මම දැන් ගෙදර ඉන්නේ.',
      category: 'Daily language usage',
      grammar: 'Present tense',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_019',
      name: 'Convert simple interrogative question',
      input: 'oyaa adha dhavasama vaeda karanavadha?',
      expected: 'ඔයා අද දවසම වැඩ කරනවද?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    
  
    {
      tcId: 'Pos_Fun_020',
      name: 'Convert polite request with condition',
      input: 'oyaata puluvannam magee files tika balala mata kiyanna.',
      expected: 'ඔයාට පුලුවන්නම් මගේ files ටික බලල මට කියන්න.',
      category: 'Greeting / request / response',
      grammar: 'Imperative (command)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_021',
      name: 'Convert compound sentence with conjunction',
      input: 'mama gedhara gihin passe poddak rest karala raeeta vaeda karanavaa.',
      expected: 'මම ගෙදර ගිහින් පස්සෙ පොඩ්ඩක් rest කරල රෑට වැඩ කරනවා.',
      category: 'Mixed Singlish + English',
      grammar: ' Compound sentence',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_022',
      name: 'Convert sentence with English brand name',
      input: 'mama adha WhatsApp valin oyaata message ekak evvaa.',
      expected: 'මම අද WhatsApp වලින් ඔයාට message එකක් එව්වා.',
      category: 'Mixed Singlish + English',
      grammar: 'Past tense',
      length: 'M'
    },
    
    // Numbers and Formats
    {
      tcId: 'Pos_Fun_023',
      name: 'Convert sentence containing date format',
      input: 'event eka 2026-05-21 venidhaa patan gannavaa.',
      expected: 'event එක 2026-05-21 වෙනිදා පටන් ගන්නවා.',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'M'
    },
    
    // Medium Length
    {
      tcId: 'Pos_Fun_024',
      name: 'Convert sentence with time reference',
      input: 'mama oyaata raee 8.00 ta passe oyaata call karannam.',
      expected: 'මම ඔයාට රෑ 8.00 ට පස්සෙ ඔයාට call කරන්නම්.',
      category: 'Punctuation / numbers',
      grammar: 'Future tense',
      length: 'M'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Joined words without spaces',
      input: 'matapaanonee',
      expected: 'මට පාන් ඕනේ.',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Medium-length informal sentence with heavy slang',
      input: 'ado machan adha traffic hari loku bn eka nisaa late wenna puluvan kiyala hithenavaa, sorry.',
      expected: 'අඩෝ මචං අද traffic එක හරි ලොකු නිසා late වෙන්න පුළුවන් කියලා හිතෙනවා, sorry.',
      category: 'Slang / informal language',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Mixed English grammar within Singlish sentence',
      input: 'mama today office gihin passe meeting ekata giyaa',
      expected: 'මම අද office ගිහින් පස්සේ meeting එකට ගියා.',
      category: 'Mixed Singlish + English',
      grammar: ' Past tense',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Special characters within input text',
      input: 'mama @@## gedhara yanavaa',
      expected: 'මම ගෙදර යනවා.',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Unnecessary word repetition in output sentence',
      input: 'mama mama gedhara yanavaa',
      expected: 'මම ගෙදර යනවා.',
      category: 'Daily language usage',
      grammar: 'Word repetition / duplication handling',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Sentence with incorrect word order causing wrong meaning',
      input: 'mata ASAP email ekak evanna kiyala boss kiwwa.',
      expected: 'මට ඉක්මනින් ඊමේල් එකක් එවන්න කියලා බොස් කිව්වා.',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Chat-style abbreviated sentence',
      input: 'mm gdr ynw passe cll krnnm',
      expected: 'මම ගෙදර යනවා පස්සේ කෝල් කරන්නම්.',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Emoji included in input sentence',
      input: 'mama hari 😊 kiyala hithenavaa',
      expected: 'මම හරි කියලා හිතෙනවා.',
      category: 'Formatting',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Very long malformed input without spaces',
      input: 'mataadhaudhasanapatangaththavaessasahahulaganisaagamataprasnayakunaakiyalaahithennathbaee.',
      expected: 'මට අද උදසන පටන් ගත්ත වැස්ස සහ හුලග නිසා ගමට ප්‍රස්නයක් උනා  කියලා හිතෙන්නත් බෑ.',
      category: 'Typographical error handling',
      grammar: 'Complex sentence',
      length: 'L'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Numeric-only input without linguistic content',
      input: '202520262027',
      expected: 'කිසිදු සිංහල පරිවර්තනයක් නොමැත',
      category: 'Input validation',
      grammar: 'Simple sentence',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'mama gedhara yanavaa.',
    partialInput: 'mama gedhara ',
    expectedFull: 'මම ගෙදර යනවා.',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
