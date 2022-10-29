{{- define "namespace" -}}
{{- if .Values.namespaceOverride -}}
{{- printf "%s" .Values.namespaceOverride -}}
{{- else -}}
{{- printf "%s" .Release.Namespace -}}
{{- end -}}
{{- end -}}

{{/* Volatile labels */}}
{{- define "volatile-labels" }}
app.kubernetes.io/managed-by: {{ .Release.Service | quote }}
app.kubernetes.io/release: {{ .Release.Name }}_{{ .Release.Revision }}
app.kubernetes.io/chartName: {{ .Chart.Name | quote }}
app.kubernetes.io/releaseDate: {{ .Release.Time | htmlDate }}
app.kubernetes.io/imageTag: {{ .Values.imageTag | quote }}
{{ end -}}

{{/* Stable labels */}}
{{- define "stable-labels" }}
app.kubernetes.io/managed-by: {{ .Release.Service | quote }}
app.kubernetes.io/chartName: {{ .Chart.Name | quote }}
{{ end -}}
