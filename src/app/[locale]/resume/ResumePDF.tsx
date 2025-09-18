import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
    borderBottom: '2 solid #3b82f6',
    paddingBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    color: '#2563eb',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  contactText: {
    color: '#374151',
    fontSize: 9,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
    borderBottom: '1 solid #e5e7eb',
    paddingBottom: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitleBar: {
    width: 3,
    height: 15,
    backgroundColor: '#3b82f6',
    marginRight: 8,
  },
  summaryBox: {
    backgroundColor: '#eff6ff',
    padding: 12,
    borderLeft: '3 solid #3b82f6',
    borderRadius: 4,
  },
  summaryText: {
    color: '#374151',
    fontSize: 9,
    lineHeight: 1.5,
  },
  experienceItem: {
    marginBottom: 12,
    paddingLeft: 12,
    borderLeft: '3 solid #3b82f6',
    backgroundColor: '#ffffff',
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  experienceTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 2,
  },
  experienceCompany: {
    fontSize: 11,
    color: '#2563eb',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  experienceLocation: {
    fontSize: 9,
    color: '#6b7280',
  },
  experienceDuration: {
    fontSize: 9,
    color: '#374151',
    backgroundColor: '#f3f4f6',
    padding: '2 8',
    borderRadius: 10,
    fontWeight: 'bold',
  },
  experienceDescription: {
    marginTop: 5,
    marginBottom: 8,
  },
  experienceDescriptionItem: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 2,
    paddingLeft: 8,
  },
  technologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
    marginTop: 5,
  },
  techTag: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '4 4 0 4',
    borderRadius: 8,
    fontSize: 7,
    fontWeight: 'bold',
    border: '1 solid #93c5fd',
  },
  educationItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f8fafc',
    borderRadius: 6,
    border: '1 solid #e2e8f0',
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 3,
  },
  educationUniversity: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 2,
  },
  educationTitle: {
    fontSize: 10,
    color: '#2563eb',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  educationLocation: {
    fontSize: 8,
    color: '#6b7280',
  },
  educationDuration: {
    fontSize: 8,
    color: '#374151',
    backgroundColor: '#f3f4f6',
    padding: '2 6',
    borderRadius: 8,
    fontWeight: 'bold',
  },
  languages: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 5,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  languageFlag: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#2563eb',
    backgroundColor: '#eff6ff',
    padding: '2 4',
    borderRadius: 3,
    border: '1 solid #dbeafe',
  },
  languageName: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#111827',
  },
  languageLevel: {
    fontSize: 8,
    color: '#6b7280',
  },
});

interface ResumePDFProps {
  translations: {
    hero: (key: string) => string;
    experience: (key: string) => string;
    education: (key: string) => string;
    languages: (key: string) => string;
    contact: (key: string) => string;
  };
}

export default function ResumePDF({ translations }: ResumePDFProps) {
  const t = translations;

  const experiences = [
    {
      title: t.experience('items.platsage.title'),
      company: t.experience('items.platsage.company'),
      location: t.experience('items.platsage.location'),
      duration: t.experience('items.platsage.duration'),
      description: t.experience('items.platsage.description'),
      technologies: ["AWS", "Pulumi", "AI/ML", "WhatsApp API", "Docker"],
    },
    {
      title: t.experience('items.siglo.title'),
      company: t.experience('items.siglo.company'),
      location: t.experience('items.siglo.location'),
      duration: t.experience('items.siglo.duration'),
      description: t.experience('items.siglo.description'),
      technologies: ["Django", "Kotlin", "Jetpack Compose", "Android", "Python"],
    },
    {
      title: t.experience('items.oneragtime.title'),
      company: t.experience('items.oneragtime.company'),
      location: t.experience('items.oneragtime.location'),
      duration: t.experience('items.oneragtime.duration'),
      description: t.experience('items.oneragtime.description'),
      technologies: ["Django", "Vue.js", "Docker", "MySQL", "Sentry"],
    },
    {
      title: t.experience('items.capvital.title'),
      company: t.experience('items.capvital.company'),
      location: t.experience('items.capvital.location'),
      duration: t.experience('items.capvital.duration'),
      description: t.experience('items.capvital.description'),
      technologies: ["Laravel", "AngularJS", "Python", "MySQL"],
    },
    {
      title: t.experience('items.inria.title'),
      company: t.experience('items.inria.company'),
      location: t.experience('items.inria.location'),
      duration: t.experience('items.inria.duration'),
      description: t.experience('items.inria.description'),
      technologies: ["Vue.js", "Node.js", "Java", "SQLite", "IoT"],
    },
  ];

  const educationItems = [
    {
      title: t.education('items.harbourspace.title'),
      university: t.education('items.harbourspace.university'),
      location: t.education('items.harbourspace.location'),
      duration: t.education('items.harbourspace.duration'),
    },
    {
      title: t.education('items.universityGrenoble.title'),
      university: t.education('items.universityGrenoble.university'),
      location: t.education('items.universityGrenoble.location'),
      duration: t.education('items.universityGrenoble.duration'),
    },
    {
      title: t.education('items.universityChihuahua.title'),
      university: t.education('items.universityChihuahua.university'),
      location: t.education('items.universityChihuahua.location'),
      duration: t.education('items.universityChihuahua.duration'),
    },
  ];

  const languages = [
    {
      name: t.languages('items.french.name'),
      level: t.languages('items.french.level'),
      flag: 'FR'
    },
    {
      name: t.languages('items.english.name'),
      level: t.languages('items.english.level'),
      flag: 'US'
    },
    {
      name: t.languages('items.spanish.name'),
      level: t.languages('items.spanish.level'),
      flag: 'ES'
    }
  ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{t.hero('name')}</Text>
          <Text style={styles.title}>{t.hero('title')} | Full-Stack Developer</Text>
          <View style={styles.contactInfo}>
            <View style={styles.contactItem}>
              <Text style={styles.contactText}>
                <Link style={styles.contactText} href={t.contact('methods.email.url')}>{t.contact('methods.email.url').replace('mailto:', '')}</Link>
              </Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactText}>
                <Link style={styles.contactText} href={t.contact('methods.linkedin.url')}>{t.contact('methods.linkedin.name')}</Link>
              </Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactText}>
                <Link  style={styles.contactText} href={t.contact('methods.github.url')}>{t.contact('methods.github.name')}</Link>
              </Text>
            </View>
          </View>
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <View style={styles.sectionTitle}>
            <View style={styles.sectionTitleBar} />
            <Text>{t.hero('summary')}</Text>
          </View>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryText}>
              {t.hero('description')}
            </Text>
          </View>
        </View>

        {/* Languages */}
        <View style={styles.section}>
          <View style={styles.languages}>
            {languages.map((lang, index) => (
              <View key={index} style={styles.languageItem}>
                <Text style={styles.languageName}>{lang.name}</Text>
                <Text style={styles.languageLevel}>- {lang.level}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Professional Experience */}
        <View style={styles.section}>
          <View style={styles.sectionTitle}>
            <View style={styles.sectionTitleBar} />
            <Text>{t.experience('title')}</Text>
          </View>
          {experiences.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <View>
                  <Text style={styles.experienceTitle}>{exp.title}</Text>
                  <Text style={styles.experienceCompany}>{exp.company}</Text>
                  <Text style={styles.experienceLocation}>{exp.location}</Text>
                </View>
                <Text style={styles.experienceDuration}>{exp.duration}</Text>
              </View>
              <View style={styles.experienceDescription}>
                {exp.description.split('\n').map((line, lineIndex) => (
                  <Text key={lineIndex} style={styles.experienceDescriptionItem}>
                    • {line}
                  </Text>
                ))}
              </View>
              <View style={styles.technologies}>
                {exp.technologies.map((tech) => (
                  <Text key={tech} style={styles.techTag}>
                    {tech}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <View style={styles.sectionTitle}>
            <View style={styles.sectionTitleBar} />
            <Text>{t.education('title')}</Text>
          </View>
          {educationItems.map((item, index) => (
            <View key={index} style={styles.educationItem}>
              <View style={styles.educationHeader}>
                <View>
                  <Text style={styles.educationUniversity}>{item.university}</Text>
                  <Text style={styles.educationTitle}>{item.title}</Text>
                  <Text style={styles.educationLocation}>{item.location}</Text>
                </View>
                <Text style={styles.educationDuration}>{item.duration}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
