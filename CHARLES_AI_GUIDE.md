# 🤖 CHARLES AI - Complete Guide

## What is CHARLES AI?

**CHARLES** is an advanced AI assistant integrated into the CHARTECH portfolio that:
- 💬 Has intelligent conversations
- 📊 Analyzes code and provides feedback
- 🎯 Recommends projects based on interests
- 🏆 Assesses your technical skills
- 🚀 Provides career guidance
- 📈 Tracks conversation history

## Quick Start

### 1. Get API Keys

**OpenAI (Recommended)**
- Go to [OpenAI Platform](https://platform.openai.com/api-keys)
- Create API key
- Copy to `.env`: `VITE_CHARLES_API_KEY=sk-...`

**Alternatively, Claude**
- Go to [Anthropic Console](https://console.anthropic.com/)
- Create API key
- Copy to `.env`: `VITE_CHARLES_API_KEY=sk-ant-...`

### 2. Configure Environment

```bash
cp .env.example .env
# Edit .env and add your VITE_CHARLES_API_KEY
```

### 3. Start Using CHARLES

Click the **🤖 CHARLES AI** button in the bottom-right corner of the website.

## Commands

### Basic Information
```
help              - Show all commands
about             - About CHARTECH and CHARLES AI
skills            - View technical skills
projects          - View active projects
contact           - Contact information
vision            - Charles' vision and mission
clear             - Clear terminal
```

### Advanced Features (Requires API Key)

```
analyze [code]    - Analyze code and get feedback
recommend [interests] - Get project recommendations
assess [description]  - Assess your tech skills
explain [topic]   - Deep dive into any tech topic
```

## Usage Examples

### Example 1: Code Analysis
```
> analyze my code
[Paste your code]

✅ CHARLES analyzes and provides feedback on:
- Code quality
- Best practices
- Performance issues
- Security vulnerabilities
- Refactoring suggestions
```

### Example 2: Project Recommendations
```
> recommend web development, AI, Arduino

✅ CHARLES suggests 3 beginner-friendly projects
```

### Example 3: Skill Assessment
```
> assess I know Python, JavaScript, and Arduino

✅ CHARLES evaluates your current level
✅ Recommends learning paths
✅ Suggests next steps
```

## Advanced Setup

### Using CHARLES in Your Own Code

```javascript
// Import CHARLES AI
import CharlesAI from './charles-ai.js';

// Initialize
const charles = new CharlesAI({
  apiKey: process.env.VITE_CHARLES_API_KEY,
  model: 'gpt-4-turbo',
  maxHistory: 20
});

// Send message
const response = await charles.sendMessage('Hello CHARLES!');
console.log(response.response);

// Analyze code
const analysis = await charles.analyzeCode(`
function add(a, b) {
  return a + b;
}
`, 'javascript');

// Get recommendations
const recommendations = await charles.getProjectRecommendations('web development, AI');

// Export conversation
const history = charles.exportConversation();
```

### CHARLES API Reference

#### Methods

```javascript
// Send message
await charles.sendMessage(message, context)

// Analyze code
await charles.analyzeCode(code, language)

// Assess skills
await charles.assessSkills(description)

// Get recommendations
await charles.getProjectRecommendations(interests)

// Get history
charles.getHistory()

// Clear history
charles.clearHistory()

// Export
charles.exportConversation()
```

#### Response Format

```javascript
{
  success: true,
  response: "AI response here...",
  model: "gpt-4-turbo",
  timestamp: "2026-06-14T10:30:00Z"
}
```

## Customization

### Change CHARLES Personality

Edit `charles-ai.js` line ~20:

```javascript
initPersonality() {
  return {
    name: 'CHARLES',
    role: 'Your custom role here',
    tone: 'Your custom tone'
  };
}
```

### Add Custom Commands

Edit the terminal handler in `index-secure.html` around line 400:

```javascript
function processCommand(cmd) {
  const lower = cmd.trim().toLowerCase();
  
  // Add your custom command
  if (lower.includes('custom-command')) {
    addTermLine('Custom response', 'bot');
    return;
  }
  // ...
}
```

## Troubleshooting

### "API Key not configured"
- ✅ Check `.env` file exists
- ✅ Verify `VITE_CHARLES_API_KEY` is set
- ✅ Restart development server

### "Connection failed"
- ✅ Check internet connection
- ✅ Verify API key is valid
- ✅ Check API quota in platform dashboard

### "Rate limited"
- ✅ Wait a few minutes
- ✅ Check API plan limits
- ✅ Upgrade plan if needed

## Costs

### OpenAI
- GPT-4 Turbo: ~$0.01-0.03 per 1K tokens
- Usage varies by conversation length
- Check [OpenAI Pricing](https://openai.com/pricing/)

### Claude
- Varies by model
- Check [Anthropic Pricing](https://www.anthropic.com/pricing)

## Privacy

- ✅ Conversations stored locally in browser (unless synced)
- ✅ Never store API keys in code
- ✅ Use `.env` files for sensitive data
- ✅ Review Claude/OpenAI privacy policies

## Features Roadmap

- [ ] Voice input/output
- [ ] Conversation persistence (database)
- [ ] Multi-language support
- [ ] Code execution sandbox
- [ ] Integration with GitHub
- [ ] Real-time collaboration
- [ ] Custom training data

## Support

For issues:
1. Check this guide
2. Review error messages
3. Check API status
4. Contact: charlestechnology46@gmail.com

---

**Powered by CHARLES AI 🤖 | Built by Charles Technology**
