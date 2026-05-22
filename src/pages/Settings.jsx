import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Clock,
  Globe,
  MapPin,
  Tag,
  Bell,
  Type,
  Image as ImageIcon,
  Info,
  LogOut,
  Sparkles,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { usePreferences } from '../context/PreferencesContext'
import { useTranslation } from '../hooks/useTranslation'
import { LANGUAGES, REGIONS, TOPICS, regionById } from '../data/topics'
import AppHeader from '../components/AppHeader'
import BottomSheet from '../components/ui/BottomSheet'
import Modal from '../components/ui/Modal'
import Toggle from '../components/ui/Toggle'
import Tabs from '../components/ui/Tabs'
import Button from '../components/ui/Button'

export default function Settings() {
  const navigate = useNavigate()
  const { isAuthenticated, logOut, isPremium, promptPremium } = useAuth()
  const prefs = usePreferences()
  const { t, pick, language } = useTranslation()
  const [sheet, setSheet] = useState(null)
  const [coming, setComing] = useState(null)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [signOutOpen, setSignOutOpen] = useState(false)

  const langLabel = LANGUAGES.find((l) => l.code === language)?.label
  const regionLabel = pick(regionById(prefs.region))

  const pickLanguage = (l) => {
    if (l.enabled) {
      prefs.setLanguage(l.code)
      setSheet(null)
    } else {
      setComing(l)
    }
  }

  return (
    <div className="screen settings">
      <AppHeader
        left={
          <button
            className="icon-btn"
            onClick={() => navigate(-1)}
            aria-label={t('back')}
          >
            <ChevronLeft size={22} />
          </button>
        }
        center={t('settingsTitle')}
      />

      <div className="screen-pad settings-body">
        {/* subscription */}
        <p className="settings-group-label">{t('premiumSection')}</p>
        <div className="setting-group">
          {isPremium ? (
            <div className="setting-row setting-row--static">
              <span className="setting-ic setting-ic--gold">
                <Sparkles size={18} />
              </span>
              <span className="setting-label">{t('premiumName')}</span>
              <span className="setting-value setting-value--active">
                {t('premiumActive')}
              </span>
            </div>
          ) : (
            <button className="setting-row" onClick={promptPremium}>
              <span className="setting-ic setting-ic--gold">
                <Sparkles size={18} />
              </span>
              <span className="setting-label">{t('premiumName')}</span>
              <span className="setting-value">{t('goPremium')}</span>
              <ChevronRight size={17} className="text-faint" />
            </button>
          )}
        </div>

        {/* preferences */}
        <p className="settings-group-label">{t('prefSection')}</p>
        <div className="setting-group">
          <button className="setting-row" onClick={() => setSheet('language')}>
            <span className="setting-ic"><Globe size={18} /></span>
            <span className="setting-label">{t('language')}</span>
            <span className="setting-value">{langLabel}</span>
            <ChevronRight size={17} className="text-faint" />
          </button>
          <button className="setting-row" onClick={() => setSheet('region')}>
            <span className="setting-ic"><MapPin size={18} /></span>
            <span className="setting-label">{t('region')}</span>
            <span className="setting-value">{regionLabel}</span>
            <ChevronRight size={17} className="text-faint" />
          </button>
          <button className="setting-row" onClick={() => setSheet('interests')}>
            <span className="setting-ic"><Tag size={18} /></span>
            <span className="setting-label">{t('interests')}</span>
            <span className="setting-value">{prefs.topics.length}</span>
            <ChevronRight size={17} className="text-faint" />
          </button>
        </div>

        {/* notifications */}
        <p className="settings-group-label">{t('notifSection')}</p>
        <div className="setting-group">
          <div className="setting-row">
            <span className="setting-ic"><Bell size={18} /></span>
            <span className="setting-label">{t('pushNotifs')}</span>
            <Toggle
              checked={prefs.notifications.push}
              onChange={() => prefs.toggleNotification('push')}
            />
          </div>
          <div className="setting-row">
            <span className="setting-label setting-label--indent">
              {t('breakingNews')}
            </span>
            <Toggle
              checked={prefs.notifications.breaking}
              onChange={() => prefs.toggleNotification('breaking')}
            />
          </div>
          <div className="setting-row">
            <span className="setting-label setting-label--indent">
              {t('dailyDigest')}
            </span>
            <Toggle
              checked={prefs.notifications.digest}
              onChange={() => prefs.toggleNotification('digest')}
            />
          </div>
        </div>

        {/* reading experience */}
        <p className="settings-group-label">{t('readingSection')}</p>
        <div className="setting-group">
          <div className="setting-row setting-row--stack">
            <div className="setting-row-line">
              <span className="setting-ic"><Type size={18} /></span>
              <span className="setting-label">{t('textSize')}</span>
            </div>
            <Tabs
              value={prefs.textSize}
              onChange={prefs.setTextSize}
              items={[
                { value: 'small', label: t('textSizeSmall') },
                { value: 'medium', label: t('textSizeMedium') },
                { value: 'large', label: t('textSizeLarge') },
              ]}
            />
          </div>
          <div className="setting-row">
            <span className="setting-ic"><ImageIcon size={18} /></span>
            <span className="setting-label">
              {t('dataSaver')}
              <small className="setting-sub">{t('dataSaverSub')}</small>
            </span>
            <Toggle
              checked={prefs.dataSaver}
              onChange={() => prefs.setDataSaver(!prefs.dataSaver)}
            />
          </div>
        </div>

        {/* about */}
        <p className="settings-group-label">{t('aboutSection')}</p>
        <div className="setting-group">
          <button className="setting-row" onClick={() => setAboutOpen(true)}>
            <span className="setting-ic"><Info size={18} /></span>
            <span className="setting-label">{t('aboutApp')}</span>
            <ChevronRight size={17} className="text-faint" />
          </button>
          <div className="setting-row setting-row--static">
            <span className="setting-label">{t('privacyPolicy')}</span>
          </div>
          <div className="setting-row setting-row--static">
            <span className="setting-label">{t('termsOfService')}</span>
          </div>
          <div className="setting-row setting-row--static">
            <span className="setting-label">{t('version')}</span>
            <span className="setting-value">1.0.0</span>
          </div>
        </div>

        {isAuthenticated && (
          <button
            className="settings-signout"
            onClick={() => setSignOutOpen(true)}
          >
            <LogOut size={18} />
            {t('logOut')}
          </button>
        )}
      </div>

      {/* language sheet */}
      <BottomSheet
        open={sheet === 'language'}
        onClose={() => setSheet(null)}
        title={t('changeLanguage')}
      >
        <div className="opt-list">
          {LANGUAGES.map((l) => {
            const selected = language === l.code
            return (
              <button
                key={l.code}
                className={`opt-row ${selected ? 'is-selected' : ''} ${
                  !l.enabled ? 'is-locked' : ''
                }`}
                onClick={() => pickLanguage(l)}
              >
                <div className="opt-row-main">
                  <span className="opt-row-title">{l.label}</span>
                  <span className="opt-row-sub">{l.native}</span>
                </div>
                {!l.enabled ? (
                  <span className="opt-soon">{t('langComingTitle')}</span>
                ) : (
                  <span className={`opt-radio ${selected ? 'is-on' : ''}`}>
                    {selected && <Check size={13} strokeWidth={3.5} />}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </BottomSheet>

      {/* region sheet */}
      <BottomSheet
        open={sheet === 'region'}
        onClose={() => setSheet(null)}
        title={t('region')}
      >
        <div className="opt-list">
          {REGIONS.map((r) => {
            const selected = prefs.region === r.id
            return (
              <button
                key={r.id}
                className={`opt-row ${selected ? 'is-selected' : ''}`}
                onClick={() => {
                  prefs.setRegion(r.id)
                  setSheet(null)
                }}
              >
                <div className="opt-row-main">
                  <span className="opt-row-title">{pick(r)}</span>
                </div>
                <span className={`opt-radio ${selected ? 'is-on' : ''}`}>
                  {selected && <Check size={13} strokeWidth={3.5} />}
                </span>
              </button>
            )
          })}
        </div>
      </BottomSheet>

      {/* interests sheet */}
      <BottomSheet
        open={sheet === 'interests'}
        onClose={() => setSheet(null)}
        title={t('interests')}
        subtitle={t('interestsHint', { n: prefs.topics.length })}
      >
        <div className="topic-grid">
          {TOPICS.map((topic) => {
            const selected = prefs.topics.includes(topic.id)
            return (
              <button
                key={topic.id}
                className={`topic-card ${selected ? 'is-selected' : ''}`}
                style={{ '--cat': topic.color }}
                onClick={() => prefs.toggleTopic(topic.id)}
              >
                <span className="topic-emoji">{topic.icon}</span>
                <span className="topic-name">{pick(topic)}</span>
                {selected && (
                  <span className="topic-check">
                    <Check size={12} strokeWidth={3.5} />
                  </span>
                )}
              </button>
            )
          })}
        </div>
        <Button full variant="primary" onClick={() => setSheet(null)}>
          {t('done')}
        </Button>
      </BottomSheet>

      {/* coming-soon language modal */}
      <Modal
        open={!!coming}
        onClose={() => setComing(null)}
        icon={<Clock size={24} />}
        title={t('langComingTitle')}
        actions={
          <Button variant="primary" onClick={() => setComing(null)}>
            {t('gotIt')}
          </Button>
        }
      >
        {coming && t('langComingBody', { lang: coming.label })}
      </Modal>

      {/* about modal */}
      <Modal
        open={aboutOpen}
        onClose={() => setAboutOpen(false)}
        icon={<Info size={24} />}
        title={t('aboutApp')}
        actions={
          <Button variant="primary" onClick={() => setAboutOpen(false)}>
            {t('gotIt')}
          </Button>
        }
      >
        {t('tagline')} Samachar Lens gathers the day’s news and shows you the
        lens behind it — who owns and funds each outlet, and how the same story
        is covered across the media.
      </Modal>

      {/* sign-out confirm */}
      <Modal
        open={signOutOpen}
        onClose={() => setSignOutOpen(false)}
        icon={<LogOut size={22} />}
        title={t('signOutConfirm')}
        actions={
          <>
            <Button
              variant="primary"
              onClick={() => {
                logOut()
                navigate('/intro')
              }}
            >
              {t('logOut')}
            </Button>
            <Button variant="ghost" onClick={() => setSignOutOpen(false)}>
              {t('cancel')}
            </Button>
          </>
        }
      />
    </div>
  )
}
