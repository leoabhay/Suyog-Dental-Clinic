import { 
  CheckCircle, Sparkles, Users, Award
} from 'lucide-react'

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

export const services = [
  {
    icon: CheckCircle,
    title: 'General Checkup',
    description: 'Comprehensive dental examinations to maintain your oral health and prevent future problems.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop'
  },
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    description: 'Professional whitening treatments for a brighter, more confident smile.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop'
  },
  {
    icon: Users,
    title: 'Orthodontics',
    description: 'Expert alignment solutions including braces and clear aligners for all ages.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop'
  },
  {
    icon: Award,
    title: 'Root Canal Treatment',
    description: 'Pain-free endodontic procedures to save damaged teeth and restore comfort.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop'
  },
  {
    icon: Sparkles,
    title: 'Dental Implants',
    description: 'Permanent tooth replacement solutions for a natural-looking, functional smile.',
    image: 'https://plus.unsplash.com/premium_photo-1682097288491-7e926a30cd0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    icon: Users,
    title: 'Pediatric Dentistry',
    description: 'Gentle, specialized care for children in a friendly, anxiety-free environment.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop'
  }
]

export const team = [
  {
    name: 'Dr. Jashodhanand Chaudhary',
    title: 'Lead Dentist & Founder',
    specialty: 'BDS',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop'
  },
  {
    name: 'Dr. Priya Thakur',
    title: 'Senior Dental Surgeon',
    specialty: 'BDS, Cosmetic Dentistry',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop'
  },
  {
    name: 'Nurse Anjali Rai',
    title: 'Head Dental Assistant',
    specialty: 'Certified Dental Hygienist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop'

  }
]

export const gallery = [
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
  'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80',
  'https://plus.unsplash.com/premium_photo-1682097288491-7e926a30cd0b?w=800&q=80',
  'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80',
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80'
]

export const contactInfo = {
  address: 'Arnaha, Saptari, Province 2, Nepal',
  phone: '+977 9865137397',
  email: 'info@suyogdental.com',
  openingHours: 'Sun - Fri: 9:00 AM - 6:00 PM',
  closed: 'Saturday'
}