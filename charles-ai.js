/**
 * CHARLES AI - Advanced AI Engine for CHARTECH Portfolio
 * Secure, modular, and production-ready
 */

class CharlesAI {
  constructor(config = {}) {
    this.apiKey = config.apiKey || process.env.VITE_CHARLES_API_KEY;
    this.model = config.model || 'gpt-4-turbo';
    this.endpoint = config.endpoint || process.env.VITE_CHARLES_ENDPOINT;
    this.conversationHistory = [];
    this.maxHistory = config.maxHistory || 20;
    this.personality = this.initPersonality();
  }

  /**
   * Initialize CHARLES personality and knowledge base
   */
  initPersonality() {
    return {
      name: 'CHARLES',
      role: 'Advanced AI Assistant for CHARTECH',
      version: '2.0',
      capabilities: [
        'Code Analysis',
        'Math Computation',
        'Project Recommendations',
        'Skill Assessment',
        'Career Guidance',
        'Technical Consulting'
      ],
      tone: 'Professional, witty, technical'
    };
  }

  /**
   * Send secure message to CHARLES AI
   */
  async sendMessage(userMessage, context = {}) {
    if (!this.apiKey) {
      throw new Error('❌ CHARLES API Key not configured. Set VITE_CHARLES_API_KEY');
    }

    // Add to history
    this.conversationHistory.push({
      role: 'user',
      content: userMessage,
      timestamp: new Date().toISOString()
    });

    // Build system prompt
    const systemPrompt = this.buildSystemPrompt(context);

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            { role: 'system', content: systemPrompt },
            ...this.conversationHistory.slice(-this.maxHistory)
          ],
          temperature: 0.7,
          max_tokens: 2048
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;

      // Store response
      this.conversationHistory.push({
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date().toISOString()
      });

      return {
        success: true,
        response: aiResponse,
        model: this.model,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('❌ CHARLES Error:', error);
      return {
        success: false,
        error: error.message,
        fallback: this.getFallbackResponse(userMessage)
      };
    }
  }

  /**
   * Build dynamic system prompt based on context
   */
  buildSystemPrompt(context) {
    return `You are ${this.personality.name}, an advanced AI assistant for CHARTECH portfolio.

Your capabilities: ${this.personality.capabilities.join(', ')}

Key Information:
- Creator: Charles Technology, 16-year-old from Bukavu, DRC
- Specialization: AI Engineering, Hardware Development, Full-Stack Web
- Projects: CH01 eVTOL drone, CH-APP messenger
- Contact: charlestechnology46@gmail.com

Context: ${JSON.stringify(context)}

Be helpful, witty, and technical. Provide actionable insights.`;
  }

  /**
   * Fallback responses when API is unavailable
   */
  getFallbackResponse(input) {
    const lower = input.toLowerCase();
    
    if (lower.includes('skills') || lower.includes('competences')) {
      return '🔧 CHARLES knows: Python, JavaScript, C++, FreeCAD, ESP32, Arduino, Firebase, 3D design, drone systems, and AI/ML.';
    }
    if (lower.includes('project')) {
      return '🚀 Active Projects: CH01 (8-motor eVTOL concept) and CH-APP (real-time messenger with AI).';
    }
    if (lower.includes('contact')) {
      return '📧 Reach out: charlestechnology46@gmail.com or WhatsApp +243 892 959 679';
    }
    return '💡 I\'m CHARLES AI. Ask me about skills, projects, or anything tech-related!';
  }

  /**
   * Analyze code and provide feedback
   */
  async analyzeCode(code, language = 'javascript') {
    const message = `Analyze this ${language} code and provide feedback:\n\n\`\`\`${language}\n${code}\n\`\`\``;
    return this.sendMessage(message, { task: 'code_analysis' });
  }

  /**
   * Skill assessment
   */
  async assessSkills(description) {
    const message = `Based on this description, assess my technical skills and recommend next steps:\n\n${description}`;
    return this.sendMessage(message, { task: 'skill_assessment' });
  }

  /**
   * Project recommendations
   */
  async getProjectRecommendations(interests) {
    const message = `Based on these interests: ${interests}, recommend 3 beginner-friendly projects I could build.`;
    return this.sendMessage(message, { task: 'project_recommendation' });
  }

  /**
   * Get conversation history
   */
  getHistory() {
    return this.conversationHistory;
  }

  /**
   * Clear conversation history
   */
  clearHistory() {
    this.conversationHistory = [];
    return { success: true, message: '✅ Conversation cleared' };
  }

  /**
   * Export conversation as JSON
   */
  exportConversation() {
    return {
      personality: this.personality,
      conversationLength: this.conversationHistory.length,
      messages: this.conversationHistory,
      exportedAt: new Date().toISOString()
    };
  }
}

// Export for use in browser and Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CharlesAI;
}
